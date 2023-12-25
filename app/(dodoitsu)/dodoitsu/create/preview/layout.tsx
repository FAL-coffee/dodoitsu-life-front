import { Metadata } from "next";
export const metadata: Metadata = {
  title: "都々逸ライフ｜プレビュー",
  robots: {
    index: false, // noindexの設定
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
