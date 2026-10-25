"use client";

import { useActionState } from "react";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { login, type LoginState } from "@/actions/auth/login";
import { Spinner } from "../ui/spinner";

const initialState: LoginState = {};

const LoginForm = () => {
  const [state, formAction, isPending] = useActionState(login, initialState);

  return (
    <div className="w-full flex flex-col justify-center">
      <h1 className="text-center py-5">Login Form</h1>
      <form className="w-full flex justify-center" action={formAction}>
        <FieldSet className="w-full max-w-xs">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="John.doe@email.com"
                defaultValue={state.email}
                aria-invalid={!!state.error}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="••••••••"
                aria-invalid={!!state.error}
              />
            </Field>
          </FieldGroup>

          {state.error && (
            <p role="alert" className="text-sm text-destructive">
              {state.error}
            </p>
          )}

          <Button variant="outline" disabled={isPending}>
            {isPending ? (
              <>
                Logging in <Spinner />
              </>
            ) : (
              "Login"
            )}
          </Button>
        </FieldSet>
      </form>
    </div>
  );
};

export default LoginForm;
