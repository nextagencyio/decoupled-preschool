import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('renders hero section with CMS content', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('h1')).toContainText('Little')
  })

  test('renders navigation links', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('nav a[href="/programs"]')).toBeVisible()
    await expect(page.locator('nav a[href="/staff"]')).toBeVisible()
    await expect(page.locator('nav a[href="/events"]')).toBeVisible()
  })

  test('renders features section from CMS', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('text=Play-Based Learning').first()).toBeVisible()
  })
})

test.describe('Programs page', () => {
  test('lists programs from Drupal', async ({ page }) => {
    await page.goto('/programs')
    await expect(page.locator('h1')).toContainText('Programs')
    await expect(page.locator('text=Toddler Discovery').first()).toBeVisible()
    await expect(page.locator('text=Preschool Adventures').first()).toBeVisible()
    await expect(page.locator('text=Pre-Kindergarten').first()).toBeVisible()
    await expect(page.locator('text=After School Care').first()).toBeVisible()
  })
})

test.describe('Staff page', () => {
  test('lists staff members from Drupal', async ({ page }) => {
    await page.goto('/staff')
    await expect(page.locator('h1')).toContainText('Staff')
    await expect(page.locator('text=Maria Gonzalez').first()).toBeVisible()
    await expect(page.locator('text=James Chen').first()).toBeVisible()
    await expect(page.locator('text=Sarah Williams').first()).toBeVisible()
  })
})

test.describe('Events page', () => {
  test('lists events from Drupal', async ({ page }) => {
    await page.goto('/events')
    await expect(page.locator('h1')).toContainText('Events')
    await expect(page.locator('text=Spring Open House').first()).toBeVisible()
    await expect(page.locator('text=Little Artists').first()).toBeVisible()
    await expect(page.locator('text=Pre-K Graduation').first()).toBeVisible()
  })
})

test.describe('Detail pages (slug routing)', () => {
  test('renders program detail page', async ({ page }) => {
    await page.goto('/programs/toddler-discovery')
    await expect(page.locator('h1')).toContainText('Toddler Discovery')
  })

  test('renders about page content from Drupal', async ({ page }) => {
    await page.goto('/about')
    await expect(page.locator('h1')).toContainText('About')
  })
})

test.describe('Navigation', () => {
  test('clicking Programs navigates to programs page', async ({ page }) => {
    await page.goto('/')
    await page.locator('nav a[href="/programs"]').click()
    await expect(page).toHaveURL('/programs')
    await expect(page.locator('h1')).toContainText('Programs')
  })
})
