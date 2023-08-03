CREATE TABLE `Roles`(
    `_id` INT NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `createdTime` DATETIME NOT NULL,
    `updatedTime` DATETIME NOT NULL,
    `user` INT NOT NULL
);
ALTER TABLE
    `Roles` ADD PRIMARY KEY(`_id`);
CREATE TABLE `Contacts`(
    `_id` INT NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `img` VARCHAR(255) NOT NULL,
    `slug` VARCHAR(255) NOT NULL,
    `color` VARCHAR(255) NOT NULL,
    `contactType` INT NOT NULL,
    `domain` INT NOT NULL,
    `order` INT NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `content` VARCHAR(255) NOT NULL,
    `createdTime` DATETIME NOT NULL,
    `updatedTime` DATETIME NOT NULL,
    `user` JSON NOT NULL,
    `backgroundColor` VARCHAR(255) NOT NULL,
    `borderRadius` VARCHAR(255) NOT NULL
);
ALTER TABLE
    `Contacts` ADD PRIMARY KEY(`_id`);
CREATE TABLE `Domains`(
    `_id` INT NOT NULL,
    `domain` VARCHAR(255) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `logo` VARCHAR(255) NOT NULL,
    `backgroud` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `content` VARCHAR(255) NOT NULL,
    `createdTime` BIGINT NOT NULL,
    `updatedTime` BIGINT NOT NULL,
    `user` INT NOT NULL
);
ALTER TABLE
    `Domains` ADD PRIMARY KEY(`_id`);
CREATE TABLE `Banners`(
    `_id` INT NOT NULL,
    `img` VARCHAR(255) NOT NULL,
    `slug` VARCHAR(255) NOT NULL,
    `domain` JSON NOT NULL,
    `createdTime` BIGINT NOT NULL,
    `updatedTime` BIGINT NOT NULL,
    `user` INT NOT NULL
);
ALTER TABLE
    `Banners` ADD PRIMARY KEY(`_id`);
CREATE TABLE `Users`(
    `id` INT NOT NULL,
    `userName` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `fullName` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `phoneNumber` VARCHAR(255) NOT NULL,
    `role` INT NOT NULL,
    `activeStatus` INT NOT NULL,
    `createdTime` DATETIME NOT NULL,
    `updatedTime` BIGINT NOT NULL
);
ALTER TABLE
    `Users` ADD PRIMARY KEY(`id`);
CREATE TABLE `ContactTypes`(
    `_id` INT NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `img` VARCHAR(255) NOT NULL,
    `color` VARCHAR(255) NOT NULL,
    `slug` VARCHAR(255) NOT NULL,
    `order` INT NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `content` VARCHAR(255) NOT NULL,
    `createdTime` DATETIME NOT NULL,
    `updatedTime` DATETIME NOT NULL,
    `user` JSON NOT NULL
);
ALTER TABLE
    `ContactTypes` ADD PRIMARY KEY(`_id`);
CREATE TABLE `RoleActions`(
    `_id` INT NOT NULL,
    `role` INT NOT NULL,
    `action` BIGINT NOT NULL,
    `createdTime` DATETIME NOT NULL,
    `updatedTime` DATETIME NOT NULL,
    `user` INT NOT NULL
);
ALTER TABLE
    `RoleActions` ADD PRIMARY KEY(`_id`);
CREATE TABLE `Actions`(
    `_id` INT NOT NULL,
    `actionName` VARCHAR(255) NOT NULL,
    `createdTime` DATETIME NOT NULL,
    `updatedTime` DATETIME NOT NULL,
    `user` INT NOT NULL
);
ALTER TABLE
    `Actions` ADD PRIMARY KEY(`_id`);
ALTER TABLE
    `RoleActions` ADD CONSTRAINT `roleactions_role_foreign` FOREIGN KEY(`role`) REFERENCES `Roles`(`_id`);
ALTER TABLE
    `Roles` ADD CONSTRAINT `roles_user_foreign` FOREIGN KEY(`user`) REFERENCES `Users`(`id`);
ALTER TABLE
    `Users` ADD CONSTRAINT `users_role_foreign` FOREIGN KEY(`role`) REFERENCES `Roles`(`_id`);
ALTER TABLE
    `Contacts` ADD CONSTRAINT `contacts_contacttype_foreign` FOREIGN KEY(`contactType`) REFERENCES `ContactTypes`(`_id`);
ALTER TABLE
    `Contacts` ADD CONSTRAINT `contacts_domain_foreign` FOREIGN KEY(`domain`) REFERENCES `Domains`(`_id`);
ALTER TABLE
    `Banners` ADD CONSTRAINT `banners_domain_foreign` FOREIGN KEY(`domain`) REFERENCES `Domains`(`_id`);
ALTER TABLE
    `Domains` ADD CONSTRAINT `domains_user_foreign` FOREIGN KEY(`user`) REFERENCES `Users`(`id`);
ALTER TABLE
    `Contacts` ADD CONSTRAINT `contacts_user_foreign` FOREIGN KEY(`user`) REFERENCES `Users`(`id`);
ALTER TABLE
    `ContactTypes` ADD CONSTRAINT `contacttypes_user_foreign` FOREIGN KEY(`user`) REFERENCES `Users`(`id`);
ALTER TABLE
    `Actions` ADD CONSTRAINT `actions_user_foreign` FOREIGN KEY(`user`) REFERENCES `Users`(`id`);
ALTER TABLE
    `RoleActions` ADD CONSTRAINT `roleactions_user_foreign` FOREIGN KEY(`user`) REFERENCES `Users`(`id`);
ALTER TABLE
    `RoleActions` ADD CONSTRAINT `roleactions_action_foreign` FOREIGN KEY(`action`) REFERENCES `Actions`(`_id`);
ALTER TABLE
    `Banners` ADD CONSTRAINT `banners_user_foreign` FOREIGN KEY(`user`) REFERENCES `Users`(`id`);