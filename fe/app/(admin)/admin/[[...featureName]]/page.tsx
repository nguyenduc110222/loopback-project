import { notFound } from "next/navigation";
import { featureMap } from "../../../../components/Featuremap";

type Props = {
  params: Promise<{
    featureName: string[];
  }>;
};

export default async function AdminPage({
  params,
}: Props) {
  const { featureName } = await params;
  const path = featureName.join("/");
  const FeatureComponent = featureMap[path];

  if (!FeatureComponent) {
    notFound();
  }

  return <FeatureComponent />;

}