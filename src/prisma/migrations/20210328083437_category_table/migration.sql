-- CreateTable
CREATE TABLE `Category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `uid` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `creatdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `parentId` INTEGER NOT NULL,
UNIQUE INDEX `Category.uid_unique`(`uid`),
UNIQUE INDEX `Category.slug_unique`(`slug`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Category` ADD FOREIGN KEY (`parentId`) REFERENCES `Category`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
