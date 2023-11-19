import MainLayout from "@/components/Layout/MainLayout";

export default function Home() {
  return (
    <div>
      <h1>HI, this is my first next application</h1>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
