import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../lib/routes";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const formSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Required",
    })
    .email({ message: "Email required" }),
  password: z.string().min(1, { message: "required" }),
});

const LoginForm = () => {
  const navigate = useNavigate();
  const [formStatus, setFormStatus] = useState("idle");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "z@p.com",
      password: "asfd",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setFormStatus("submitting");
    navigate(`${ROUTES.HOME}`);
    console.log(values);
  }

  //navigate(`${ROUTES.HOME}branch/de`); <-- incase of login and branch location is detected

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="email" {...field} />
                  </FormControl>
                  <FormDescription>
                    Enter your registered email.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="password" {...field} type="password" />
                  </FormControl>
                  <FormDescription>
                    Enter password assigned with email.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={formStatus === "submitting"} type="submit">
              {formStatus === "submitting" ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </>
              ) : (
                "Login"
              )}
            </Button>
          </CardContent>
        </Card>
      </form>
    </Form>
  );
};

export default LoginForm;
