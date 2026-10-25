"use client";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { login } from "@/actions/auth/login";

const LoginForm = () => {
  return (
    <div className="w-full flex flex-col justify-center">
      <h1 className="text-center py-5">Login Form</h1>
      <form className="w-full flex justify-center" action={login}>
        <FieldSet className="w-full max-w-xs">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="John.doe@email.com"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="••••••••"
              />
            </Field>
          </FieldGroup>
          <Button variant="outline">Login</Button>
        </FieldSet>
      </form>
    </div>
  );
};

export default LoginForm;
