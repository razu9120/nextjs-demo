"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { submitForm, type FormState } from "./actions";

const initialState: FormState = {
  success: false,
};

const UseActionState = () => {
  const [state, formAction, isPending] = useActionState(submitForm, initialState);

  return (
    <div className="max-w-md mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">useActionState フォーム</h1>

      <form action={formAction} className="space-y-4" noValidate>
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            名前
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="山田太郎"
            required
            disabled={isPending}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            メールアドレス
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="example@email.com"
            required
            disabled={isPending}
          />
        </div>

        <Button type="submit" disabled={isPending} className="w-full">
          {isPending ? "送信中..." : "送信"}
        </Button>
      </form>

      {state.success && state.message && (
        <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md">
          <p className="text-sm text-green-800 dark:text-green-200">
            {state.message}
          </p>
        </div>
      )}

      {!state.success && state.error && (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
          <p className="text-sm text-red-800 dark:text-red-200">
            {state.error}
          </p>
        </div>
      )}
    </div>
  );
};

export default UseActionState;
