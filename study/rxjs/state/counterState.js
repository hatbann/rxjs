import { BehaviorSubject, map } from "rxjs";

export const counter$ = new BehaviorSubject(0);

export const CounterServie = {
  //observable
  onCounter$: () => counter$.asObservable(), //counter$라는 Subject를 관리하는 옵저버블
  onMulti$: () => counter$.pipe(map((count) => count * 10)),
};
