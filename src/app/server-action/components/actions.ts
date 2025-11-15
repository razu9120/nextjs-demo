"use server";

import { redirect } from "next/navigation";

export async function submitForm(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;

  // バリデーション
  if (!name || !email) {
    redirect(
      "/server-action?error=" +
      encodeURIComponent("名前とメールアドレスは必須です。")
    );
  }

  // メールアドレスの形式チェック
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    redirect(
      "/server-action?error=" +
      encodeURIComponent("有効なメールアドレスを入力してください。")
    );
  }

  // ここで実際の処理（データベースへの保存など）を行う
  // 今回はデモのため、コンソールに出力するだけ
  console.log("フォーム送信:", { name, email });

  // 実際のアプリケーションでは、ここでデータベースに保存するなど
  // await saveToDatabase({ name, email });

  redirect(
    "/server-action?success=" +
    encodeURIComponent(
      `ありがとうございます、${name}さん！メールアドレス ${email} で登録しました。`
    )
  );
}

