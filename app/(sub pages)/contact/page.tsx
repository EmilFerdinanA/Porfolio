import Image from "next/image";
import bg from "@/public/background/contact-background.png";
import Form from "@/components/contact/Form";

export default function Home() {
  return (
    <>
      <Image
        priority
        src={bg}
        alt="Background Image"
        className="min-h-screen min-w-screen w-full h-full top-0 left-0 object-cover object-center opacity-25 -z-50 fixed"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent text-4xl font-semibold text-center capitalize">
            summon the wizard
          </h1>

          <p className="text-center font-light text-sm xs:text-base">
            Step into the circle of enchantment and weave your words into the
            fabric of the cosmos. Whether you seek to conjure collaborations,
            unlock mysteries, or simply share tales of adventure, your messages
            are treasured scrolls within this realm. Use the form below to send
            your missives through the ethereal network, and await the whisper of
            magic in response.
          </p>
        </div>

        <Form />
      </article>
    </>
  );
}
