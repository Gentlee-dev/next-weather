export default function Home() {
  console.log(process.env.ENV);
  console.log(process.env.NEXT_PUBLIC_ENV);
  return <main>HOME</main>;
}
