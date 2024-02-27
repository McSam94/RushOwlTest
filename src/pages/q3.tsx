import Button from "@/components/button";
import { useRouter } from "next/router";

export default function Q3() {
  const { push } = useRouter();

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center space-y-3">
      <div className="flex flex-col max-w-96 shadow-xl p-5 rounded-lg">
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Q3: Explain the main difference of React and React Native during
          runtime.
        </h1>
        <div className="flex flex-col space-y-5">
          <div className="flex flex-col space-y-1">
            <h3 className="font-semibold">React</h3>
            <p>{`React for web renders components into the DOM (Document Object Model) using standard HTML elements and CSS styling. It relies on the browser's rendering engine to display and manage the components on the web page.`}</p>
          </div>
          <div className="flex flex-col space-y-1">
            <h3 className="font-semibold">React Native</h3>
            <p>{`React Native, on the other hand, renders components into native UI elements using platform-specific APIs. It doesn't rely on the browser's rendering engine, but rather uses native components to render the UI, which allows it to run on mobile devices and access native features such as camera, GPS, and push notifications.`}</p>
          </div>
        </div>
      </div>
      <Button onClick={() => push("/q2")}>Previous</Button>
    </div>
  );
}
