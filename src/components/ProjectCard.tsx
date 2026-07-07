"use client";

import {
  Column,
  Flex,
  Heading,
  IconButton,
  Row,
  SmartLink,
  Text,
} from "@once-ui-system/core";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  title,
  content,
  description,
  link,
}) => {
  return (
    <Column
      fillWidth
      gap="12"
      padding="24"
      radius="l"
      border="neutral-alpha-weak"
      background="neutral-alpha-weak"
    >
      <Row fillWidth horizontal="between" vertical="center" gap="12">
        {title && (
          <Heading as="h2" wrap="balance" variant="heading-strong-l">
            {title}
          </Heading>
        )}
        {link && (
          <IconButton
            href={link}
            icon="github"
            variant="ghost"
            size="s"
            tooltip="View on GitHub"
          />
        )}
      </Row>
      {description?.trim() && (
        <Text wrap="balance" variant="body-default-m" onBackground="neutral-weak">
          {description}
        </Text>
      )}
      {content?.trim() && (
        <Flex paddingTop="4">
          <SmartLink
            suffixIcon="arrowRight"
            style={{ margin: "0", width: "fit-content" }}
            href={href}
          >
            <Text variant="body-default-s">Read more</Text>
          </SmartLink>
        </Flex>
      )}
    </Column>
  );
};
