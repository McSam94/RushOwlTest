import Button from "@/components/button";
import { useRouter } from "next/router";
import { useCallback } from "react";

const VALUES: number[][] = [
  [1, 2, 3, 4, 5],
  [3, 4, 5, 6, 7],
  [6, 7, 8, 9, 10],
];

export default function Q2() {
  const { push } = useRouter();
  const calculateMinMax = useCallback((numbers: number[][]) => {
    const maxOfEachRow = [];
    for (const row of numbers) {
      for (const number of row) {
        maxOfEachRow.push(Math.max(...row));
      }
    }
    return Math.min(...maxOfEachRow);
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center space-y-3">
      <div className="flex flex-col max-w-96 shadow-xl p-5 rounded-lg">
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Q2: Calculate Min-Max
        </h1>
        <div className="flex flex-col space-y-5">
          <p>
            Write a Typescript snippet to find out the minimum value of the
            maximum value of each nested array given the following structure
          </p>
          <pre>
            {`javascript
const values: number[][] = [
    [1,2,3,4,5],
    [3,4,5,6,7],
    [6,7,8,9,10]
]

const answer: number = ${calculateMinMax(VALUES)}
// 5
            `}
          </pre>
        </div>
      </div>
      <Button onClick={() => push("/q3")}>Next</Button>
    </div>
  );
}
