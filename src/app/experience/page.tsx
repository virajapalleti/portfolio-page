import {
  Column,
  Heading,
  Meta,
  Row,
  Schema,
  Text,
  Button,
} from "@once-ui-system/core";
import { about, baseURL, person, social } from "@/resources";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: `Work Experience – ${person.name}`,
    description: `Work experience of ${person.name}`,
    baseURL: baseURL,
    path: "/experience",
  });
}

export default function Experience() {
  return (
    <Column maxWidth="m" paddingTop="24" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={`Work Experience – ${person.name}`}
        description={`Work experience of ${person.name}`}
        path="/experience"
        author={{
          name: person.name,
          url: baseURL,
          image: "",
        }}
      />
      <Column maxWidth={40} fillWidth>
        <Heading as="h1" variant="display-strong-m" marginBottom="l" align="center">
          Work Experience
        </Heading>

        <Column fillWidth gap="l" marginBottom="xl">
          {about.work.experiences.map((experience, index) => (
            <Column
              key={`${experience.company}-${index}`}
              fillWidth
              padding="24"
              radius="l"
              border="neutral-alpha-weak"
              background="neutral-alpha-weak"
              gap="12"
            >
              <Row fillWidth horizontal="between" vertical="end" s={{ direction: "column", align: "start" }}>
                <Text variant="heading-strong-l">{experience.company}</Text>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {experience.timeframe}
                </Text>
              </Row>
              <Text variant="body-default-s" onBackground="brand-weak">
                {experience.role}
              </Text>
              <Column as="ul" gap="12" paddingTop="4">
                {experience.achievements.map((achievement, i) => (
                  <Text
                    as="li"
                    variant="body-default-m"
                    key={`${experience.company}-a-${i}`}
                  >
                    {achievement}
                  </Text>
                ))}
              </Column>
            </Column>
          ))}
        </Column>

        <Column
          fillWidth
          gap="12"
          padding="24"
          radius="l"
          border="neutral-alpha-weak"
          marginBottom="xl"
        >
          <Text variant="heading-strong-m">Looking for something to hand off?</Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            I'm excited about interesting problems. If you have relevant projects or work you'd
            like a hand with, just hit me up.
          </Text>
          <Row gap="8" wrap paddingTop="8">
            {social
              .filter((item) => item.essential)
              .map(
                (item) =>
                  item.link && (
                    <Button
                      key={item.name}
                      href={item.link}
                      prefixIcon={item.icon}
                      label={item.name}
                      size="s"
                      weight="default"
                      variant="secondary"
                    />
                  ),
              )}
          </Row>
        </Column>
      </Column>
    </Column>
  );
}
