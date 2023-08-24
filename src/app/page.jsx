"use client";
import ninja from "/public/NinjaHero2.gif";
import styles from "/styles/header.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "@mantine/form";
import { Button, Group, Space, Textarea } from "@mantine/core";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const handleClick = (formValues, href) => {
    console.log(formValues);
    if (formValues.name.length >= 1) {
      router.push(href);
    }
  };
  const formValues = useForm({
    initialValues: {
      name: "",
      // date: "",
    },
    validate: {
      name: (value) => {
        value.length <= 0 ? "Name Required" : null;
      },
    },
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link
          href="/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Home{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </Link>

        <Link
          href="wImpact"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Whats Impact?{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </Link>

        <Link
          href="/senseiLogin"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Im a Sensei{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </Link>

        <Link
          href="https://www.codeninjas.com/westshore-bc-ca"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn more{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </Link>
      </div>
      <div
        className="cn__header section__padding"
        id="home"
      >
        <div className="cn__header-content">
          <h1 className={styles.h1}>Welcome to Progress Tracking</h1>
          <p className={styles.p}>See your childs progress in Impact</p>
          <div className="cn__header-content__input">
            <form onSubmit={formValues.onSubmit((values) => (formValues.setValues(values), formValues.validate()))}>
              <Textarea
                label="Ninja's Name"
                placeholder="first name.last name: John.Smith"
                withAsterisk
                {...formValues.getInputProps("name")}
              />
              <Space h={"8vh"} />
              <Group position="center">
                <Button
                  className="submitButton"
                  type="submit"
                  variant="outline"
                  onClick={() => handleClick(formValues.values, `Card?ninjaName=${formValues.values.name}`)}
                >
                  Submit
                </Button>
              </Group>
            </form>
          </div>
        </div>
        <div className="cn__header-image">
          <Image
            src={ninja}
            alt="ninja"
          />
        </div>
      </div>
    </main>
  );
}
