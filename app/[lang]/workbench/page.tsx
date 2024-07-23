export default async function Admin({
  params: { lang },
}: {
  params: { lang: string };
}) {
  if (lang === "zh") {
    return <div>需要登录</div>;
  }
  return <div>admin need login</div>;
}

