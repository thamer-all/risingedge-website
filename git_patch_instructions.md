# Using Git Patch to Update RisingEdge Website

This guide will walk you through applying the patch file to update your RisingEdge website repository.

## Prerequisites

- Git installed on your computer
- Local clone of your repository

## Step 1: Download the Patch File

Save the attached patch file (`0001-Fix-hero-section-spacing-backgrounds-animations-and-.patch`) to your computer.

## Step 2: Navigate to Your Local Repository

Open a terminal or command prompt and navigate to your local repository:

```bash
cd path/to/your/risingedge-website
```

## Step 3: Make Sure Your Repository is Clean

Check that you don't have any uncommitted changes:

```bash
git status
```

If you have uncommitted changes, either commit them or stash them:

```bash
# Option 1: Commit changes
git add .
git commit -m "Save my current changes"

# Option 2: Stash changes
git stash
```

## Step 4: Apply the Patch

Place the patch file in your repository directory and apply it:

```bash
git am 0001-Fix-hero-section-spacing-backgrounds-animations-and-.patch
```

If you encounter any conflicts, you can resolve them manually:

```bash
# If there are conflicts:
git am --abort
git apply --reject --whitespace=fix 0001-Fix-hero-section-spacing-backgrounds-animations-and-.patch
```

This will apply as much of the patch as possible and create `.rej` files for the parts that couldn't be applied. You'll need to manually edit those files.

## Step 5: Verify the Changes

Check that the changes were applied correctly:

```bash
git status
```

You can also run your development server to see the changes:

```bash
npm run dev
# or
pnpm dev
```

## Step 6: Push the Changes

Once you're satisfied with the changes, push them to your GitHub repository:

```bash
git push origin master
```

## What This Patch Includes

The patch makes the following improvements:

1. **Fixed spacing between navbar and hero sections** by adding padding to the main element
2. **Consistent hero section backgrounds** across About subpages
3. **Fixed invisible testimonial text** by adjusting text colors
4. **Added smooth animations** throughout the site using Framer Motion
5. **Standardized layout and spacing** across all sections

## Troubleshooting

If you encounter issues applying the patch:

1. **Patch fails to apply**: This might happen if your repository has diverged significantly from the version the patch was created for. In this case, use the manual changes approach.

2. **Conflicts during apply**: If you get conflicts, you can resolve them manually by looking at the `.rej` files and implementing the changes described in them.

3. **Push is rejected**: If your push is rejected, you might need to pull the latest changes first:

```bash
git pull --rebase origin master
git push origin master
```

