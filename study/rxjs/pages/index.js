import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { BehaviorSubject, map } from "rxjs";
import { useEffect, useState } from "react";
import { CounterServie, counter$ } from "@/state/counterState";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [count, setCount] = useState(0);
  const [multi, setMulti] = useState(0);

  useEffect(() => {
    const obs$ = CounterServie.onCounter$().subscribe(setCount); // 함수를 넣어줌
    const obs2$ = CounterServie.onMulti$().subscribe(setMulti);

    //unMount 될 때 실행
    return () => {
      obs$.unsubscribe();
      obs2$.unsubscribe();
    };
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>{count}</h1>
        <button onClick={() => counter$.next(counter$.value + 1)}>+</button>
        <button onClick={() => counter$.next(counter$.value * 10)}>
          Multi
        </button>
      </main>
    </>
  );
}
