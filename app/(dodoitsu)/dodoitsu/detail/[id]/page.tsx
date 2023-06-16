import { appConfig } from "@/config/app.config";
import { Dodoitsu } from "@/types/Dodoitsu";
import { DodoitsuCard } from "../../../_components/DodoitsuCard";
import { cache } from "react";

type Params = {
  id: string;
};

const projectUrl = appConfig().projectUrl;

const getDodoitsu = cache(async (id: number): Promise<Dodoitsu> => {
  const res = await fetch(`${projectUrl}/api/dodoitsu/${id}`, {
    method: "GET",
    next: { revalidate: 60 },
    headers: {
      "Content-Type": "application/json",
    },
  });
  throw new Error("test");
  return res.json();
});

export default async function DodoitsuDetail({ params }: { params: Params }) {
  const dodoitsu = await getDodoitsu(Number(params.id));

  return <DodoitsuCard dodoitsu={dodoitsu} />;
}
