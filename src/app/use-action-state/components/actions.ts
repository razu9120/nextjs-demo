"use server";

export type FormState = {
  success: boolean;
  message?: string;
  error?: string;
};

export async function submitForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;

  // バリデーション
  if (!name || !email) {
    return {
      success: false,
      error: "名前とメールアドレスは必須です。",
    };
  }

  // メールアドレスの形式チェック
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      success: false,
      error: "有効なメールアドレスを入力してください。",
    };
  }

  // ここで実際の処理（データベースへの保存など）を行う
  // 今回はデモのため、コンソールに出力するだけ
  console.log("フォーム送信:", { name, email });

  // 実際のアプリケーションでは、ここでデータベースに保存するなど
  // await saveToDatabase({ name, email });

  return {
    success: true,
    message: `ありがとうございます、${name}さん！メールアドレス ${email} で登録しました。`,
  };
}

