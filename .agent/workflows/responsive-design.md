---
description: responsive design guidelines for all screen sizes from mobile to 4K
---

// turbo-all

# Responsive Design Rule

Every change made to this codebase MUST be fully responsive and optimized for the following screen categories:

1. **Mobile (up to 768px)**: Optimized for touch, stack elements vertically, use mobile-specific navigation.
2. **Tablet (768px to 1024px)**: Transition layouts, adjust padding/margins.
3. **Desktop (1024px to 1920px)**: Standard desktop layout using `container-custom`.
4. **4K & Ultra-wide (1920px and above)**:
   - Ensure `container-custom` scales appropriately (max-width 1600px for 1080p+, 1920px for 4K+).
   - Use high-resolution assets where possible.
   - Maintain visual balance and avoid excessive whitespace or overly stretched elements.

### Implementation Checklist

- [ ] Use Tailwind responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`, `3xl:` if configured).
- [ ] Use `container-custom` for page centering and consistent horizontal padding.
- [ ] Test mobile menu and interactivity.
- [ ] Verify font sizes and spacing scale appropriately on 4K.
- [ ] Ensure all images/videos are properly contained or covered.
