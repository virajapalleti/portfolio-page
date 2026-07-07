import { Column, Heading, Meta, Schema, SmartLink, Text } from "@once-ui-system/core";
import { baseURL, person, work } from "@/resources";
import { Projects } from "@/components/work/Projects";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    path: work.path,
  });
}

export default function Work() {
  return (
    <Column maxWidth="m" paddingTop="24" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        author={{
          name: person.name,
          url: baseURL,
          image: "",
        }}
      />
      <Column maxWidth={40} fillWidth>
        <Heading as="h1" variant="display-strong-m" align="center" marginBottom="s">
          Projects
        </Heading>
        <Text
          variant="body-default-m"
          onBackground="neutral-weak"
          align="center"
          marginBottom="l"
        >
          A few notable ones. For everything else, check{" "}
          <SmartLink href="https://github.com/virajapalleti">my GitHub</SmartLink>.
        </Text>
        <Projects />
      </Column>
    </Column>
  );
}
