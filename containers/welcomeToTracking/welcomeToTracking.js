import { Textarea, Space, Group, Button } from "@mantine/core";
import { useForm } from "@mantine/form";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "styles/card.css";
import ninja from "assts/ninja1.png";

export default function WelcomeToTracking() {
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
  );
}
