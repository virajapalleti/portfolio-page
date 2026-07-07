import {
  Button,
  Column,
  Heading,
  IconButton,
  Meta,
  Row,
  Schema,
  Tag,
  Text,
} from "@once-ui-system/core";
import { about, baseURL, home, person, social } from "@/resources";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: "/",
    image: home.image,
  });
}

export default function AboutHome() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={home.title}
        description={home.description}
        path="/"
        author={{
          name: person.name,
          url: baseURL,
          image: "",
        }}
      />

      {/* Name + role + social */}
      <Column fillWidth horizontal="center" align="center" marginBottom="xl">
        <Heading variant="display-strong-xl">{person.name}</Heading>
        <Text variant="display-default-xs" onBackground="neutral-weak" marginTop="8">
          {person.role} · Delhi, India
        </Text>
        <Row paddingTop="20" gap="8" wrap horizontal="center" data-border="rounded">
          {social
            .filter((item) => item.essential)
            .map(
              (item) =>
                item.link && (
                  <React.Fragment key={item.name}>
                    <Row s={{ hide: true }}>
                      <Button
                        href={item.link}
                        prefixIcon={item.icon}
                        label={item.name}
                        size="s"
                        weight="default"
                        variant="secondary"
                      />
                    </Row>
                    <Row hide s={{ hide: false }}>
                      <IconButton
                        size="l"
                        href={item.link}
                        icon={item.icon}
                        variant="secondary"
                      />
                    </Row>
                  </React.Fragment>
                ),
            )}
        </Row>
      </Column>

      {/* Intro */}
      <Column fillWidth gap="m" marginBottom="xl" horizontal="center">
        <Column maxWidth={40} textVariant="body-default-l" gap="m">
          {about.intro.description}
        </Column>
      </Column>

      {/* Education */}
      <Column fillWidth horizontal="center" marginBottom="xl">
        <Column maxWidth={40} fillWidth>
          <Heading as="h2" variant="display-strong-s" marginBottom="m">
            Education
          </Heading>
          <Column fillWidth gap="16">
            {about.studies.institutions.map((institution, index) => (
              <Column
                key={`${institution.name}-${index}`}
                fillWidth
                gap="4"
                padding="20"
                radius="l"
                border="neutral-alpha-weak"
                background="neutral-alpha-weak"
              >
                <Text variant="heading-strong-m">{institution.name}</Text>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {institution.description}
                </Text>
              </Column>
            ))}
          </Column>
        </Column>
      </Column>

      {/* Technical skills */}
      <Column fillWidth horizontal="center" marginBottom="xl">
        <Column maxWidth={40} fillWidth>
          <Heading as="h2" variant="display-strong-s" marginBottom="m">
            {about.technical.title}
          </Heading>
          <Column fillWidth gap="16">
            {about.technical.skills.map((skill, index) => (
              <Column
                key={`${skill.title}-${index}`}
                fillWidth
                gap="4"
                padding="16"
                radius="m"
                border="neutral-alpha-weak"
                background="neutral-alpha-weak"
              >
                <Text variant="heading-strong-s">{skill.title}</Text>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  {skill.description}
                </Text>
              </Column>
            ))}
          </Column>
        </Column>
      </Column>
    </Column>
  );
}
