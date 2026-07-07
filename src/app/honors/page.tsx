import {
  Column,
  Heading,
  Meta,
  Schema,
  Text,
} from "@once-ui-system/core";
import { baseURL, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: `Honors – ${person.name}`,
    description: `Honors and activities of ${person.name}`,
    baseURL: baseURL,
    path: "/honors",
  });
}

const honors: string[] = [
  "Winner — Hackdata 2026 (Hackathon)",
  "Secretary of the Treasury — Shiv Nadar University Student Council 25–26",
  "Top 10 teams (SNU) — Smart India Hackathon 2025",
  "ACM SNIoE — Data Analytics team member",
  "Astronautics and Aeronautics Society, SNIoE — Technical team",
  "Google Developers Group, SNIoE — AI/ML team member",
];

export default function Honors() {
  return (
    <Column maxWidth="m" paddingTop="24" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={`Honors – ${person.name}`}
        description={`Honors and activities of ${person.name}`}
        path="/honors"
        author={{
          name: person.name,
          url: baseURL,
          image: "",
        }}
      />
      <Column maxWidth={40} fillWidth>
        <Heading as="h1" variant="display-strong-m" marginBottom="l" align="center">
          Honors & Activities
        </Heading>

        <Column fillWidth gap="12">
          {honors.map((item, index) => (
            <Column
              key={index}
              fillWidth
              padding="16"
              radius="m"
              border="neutral-alpha-weak"
              background="neutral-alpha-weak"
            >
              <Text variant="body-default-l">{item}</Text>
            </Column>
          ))}
        </Column>
      </Column>
    </Column>
  );
}
