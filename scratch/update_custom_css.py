import json, subprocess

# CSS enhancements for Large Devices & Mobile Devices + Eye-Catching Modern Visuals
enhancements = """

/* ==========================================================================
   WASEEONTHEGO: ULTRA-PREMIUM RESPONSIVE & EYE-CATCHING VISUAL SUITE
   - Large Devices (> 1200px, 1440px, 1600px, 1920px+)
   - Mobile Phones & Compact Screens (<= 767px, <= 480px, <= 360px)
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. MASTER CONTAINER HARMONIZATION FOR LARGE & EXTRA-LARGE SCREENS
   -------------------------------------------------------------------------- */
@media screen and (min-width: 1025px) {
  #hero_new_section,
  #hero_inner_wrap,
  #bento_section,
  #bento_grid_con,
  #bento_header_con,
  #divs_section,
  #divs_header_con,
  #disc_section,
  #world_section,
  #world_head_con,
  #mag_section,
  #mag_head_con,
  #vault_section,
  #vault_head_con,
  #gazette_section,
  .wotg-container,
  .single-post .ast-container,
  .journal-grid-container {
    max-width: 1400px !important;
    margin-left: auto !important;
    margin-right: auto !important;
    width: 100% !important;
    box-sizing: border-box !important;
  }

  /* Unified generous padding across all desktop sections */
  #hero_new_section,
  #bento_section,
  #divs_section,
  #disc_section,
  #world_section,
  #mag_section,
  #vault_section,
  #gazette_section {
    padding-left: 36px !important;
    padding-right: 36px !important;
  }
}

/* Extra-large widescreen displays (>= 1600px & 4K monitors) */
@media screen and (min-width: 1600px) {
  #hero_new_section,
  #hero_inner_wrap,
  #bento_section,
  #bento_grid_con,
  #divs_section,
  #disc_section,
  #world_section,
  #mag_section,
  #vault_section,
  #gazette_section,
  .wotg-container,
  .single-post .ast-container {
    max-width: 1520px !important;
  }

  /* 4-column destination grid on extra-large monitors */
  .wotg-dest-grid {
    grid-template-columns: repeat(4, 1fr) !important;
    gap: 28px !important;
  }

  .divs-cards-grid,
  .mag-cards-grid,
  .world-cards-grid {
    grid-template-columns: repeat(3, 1fr) !important;
    gap: 28px !important;
  }

  .hero-headline {
    font-size: clamp(44px, 3.2vw, 56px) !important;
    line-height: 1.15 !important;
  }

  .hero-showcase-canvas {
    height: 480px !important;
  }
}

/* --------------------------------------------------------------------------
   2. EYE-CATCHING LUXURY VISUAL POLISH (CARDS, BADGES, HOVER PHYSICS)
   -------------------------------------------------------------------------- */
/* Premium Card Hover Lift & Soft Layered Shadows */
.wotg-dest-card,
.journal-card-item,
.bento-sub-card,
.sundar-lead-card,
.divs-cards-grid > div,
.mag-cards-grid > div,
.world-cards-grid > div {
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease, border-color 0.35s ease !important;
  border: 1px solid rgba(0, 92, 85, 0.08) !important;
  box-shadow: 0 4px 20px -2px rgba(0, 92, 85, 0.06), 0 2px 6px -1px rgba(0,0,0,0.04) !important;
  border-radius: 18px !important;
  overflow: hidden !important;
  background: #ffffff !important;
}

.wotg-dest-card:hover,
.journal-card-item:hover,
.bento-sub-card:hover,
.divs-cards-grid > div:hover,
.mag-cards-grid > div:hover,
.world-cards-grid > div:hover {
  transform: translateY(-6px) !important;
  box-shadow: 0 20px 40px -10px rgba(0, 92, 85, 0.16), 0 8px 18px -4px rgba(0, 0, 0, 0.08) !important;
  border-color: rgba(0, 92, 85, 0.25) !important;
}

/* Image Zoom Smooth Transition */
.wotg-card-img,
.journal-card-item img,
.bento-sub-canvas img,
.hero-showcase-canvas img,
.divs-card-canvas img {
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

.wotg-dest-card:hover .wotg-card-img,
.journal-card-item:hover img,
.bento-sub-card:hover .bento-sub-canvas img,
.hero-showcase-canvas:hover img,
.divs-cards-grid > div:hover .divs-card-canvas img {
  transform: scale(1.06) !important;
}

/* Eye-Catching Glassmorphism & Gradient Badges */
.wotg-card-chip,
.expedition-badge,
.hero-dispatch-pill {
  backdrop-filter: blur(12px) !important;
  -webkit-backdrop-filter: blur(12px) !important;
  background: rgba(12, 24, 21, 0.72) !important;
  border: 1px solid rgba(255, 255, 255, 0.22) !important;
  color: #ffffff !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
  border-radius: 9999px !important;
  font-weight: 600 !important;
  letter-spacing: 0.5px !important;
}

/* Primary Action Buttons Glow & Hover State */
a.wotg-card-action,
.hero-search-form button,
.wotg-dispatch-btn,
a.xpro-elementor-button {
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1) !important;
  position: relative !important;
  overflow: hidden !important;
}

a.wotg-card-action:hover,
.hero-search-form button:hover,
.wotg-dispatch-btn:hover {
  transform: translateY(-2px) !important;
  box-shadow: 0 8px 24px rgba(0, 92, 85, 0.35) !important;
}

/* --------------------------------------------------------------------------
   3. MOBILE PHONES (<= 767px) TOTAL RESPONSIVE REFINEMENT
   -------------------------------------------------------------------------- */
@media screen and (max-width: 767px) {
  /* Eliminate any horizontal overflow cleanly */
  html, body {
    overflow-x: hidden !important;
    max-width: 100vw !important;
    width: 100% !important;
  }

  /* Responsive Containers on Mobile */
  #hero_new_section,
  #bento_section,
  #divs_section,
  #disc_section,
  #world_section,
  #mag_section,
  #vault_section,
  #gazette_section,
  .wotg-container {
    padding-left: 14px !important;
    padding-right: 14px !important;
    padding-top: 32px !important;
    padding-bottom: 32px !important;
    width: 100% !important;
    max-width: 100vw !important;
    box-sizing: border-box !important;
  }

  /* Override all fixed inline widths from Elementor */
  .hero-subhead,
  .hero-search-form,
  [style*="max-width:540px"],
  [style*="max-width:600px"],
  [style*="max-width:400px"],
  [style*="max-width:380px"],
  [style*="max-width:560px"],
  [style*="max-width:440px"] {
    max-width: 100% !important;
    width: 100% !important;
    box-sizing: border-box !important;
  }

  /* Mobile Hero Section */
  .hero-headline {
    font-size: clamp(25px, 6.8vw, 32px) !important;
    line-height: 1.2 !important;
    margin-bottom: 12px !important;
    letter-spacing: -0.4px !important;
  }

  .hero-subhead {
    font-size: 14px !important;
    line-height: 1.55 !important;
    margin-bottom: 18px !important;
    color: #4a5553 !important;
  }

  /* Hero Search Form on Mobile */
  .hero-search-form {
    border-radius: 16px !important;
    padding: 10px !important;
    flex-direction: column !important;
    align-items: stretch !important;
    gap: 10px !important;
    background: #ffffff !important;
    box-shadow: 0 8px 24px rgba(0, 92, 85, 0.1) !important;
    border: 1px solid rgba(0, 92, 85, 0.18) !important;
  }

  .hero-search-form input {
    width: 100% !important;
    padding: 10px 12px !important;
    font-size: 15px !important;
    background: #f8f6f2 !important;
    border-radius: 10px !important;
    border: none !important;
  }

  .hero-search-form button {
    width: 100% !important;
    padding: 13px 18px !important;
    border-radius: 10px !important;
    font-size: 14px !important;
    font-weight: 600 !important;
    background: #005c55 !important;
    color: #ffffff !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 8px !important;
  }

  /* Hero Showcase Right Card on Mobile */
  .hero-showcase-canvas {
    height: 270px !important;
    border-radius: 16px !important;
  }

  /* Bento Grid on Mobile */
  #bento_grid_con {
    gap: 18px !important;
  }

  .sundar-lead-canvas {
    height: 210px !important;
  }

  .sundar-lead-body {
    padding: 16px 14px !important;
  }

  .sundar-lead-title {
    font-size: 19px !important;
    line-height: 1.25 !important;
  }

  .bento-sub-card {
    flex-direction: column !important;
    border-radius: 16px !important;
  }

  .bento-sub-canvas {
    width: 100% !important;
    height: 175px !important;
  }

  .bento-sub-body {
    width: 100% !important;
    padding: 16px 14px !important;
  }

  /* Filter & Category Pills: Smooth Horizontal Touch Carousel */
  .wotg-pills-list,
  .divs-pills-con {
    display: flex !important;
    flex-wrap: nowrap !important;
    overflow-x: auto !important;
    -webkit-overflow-scrolling: touch !important;
    scrollbar-width: none !important;
    -ms-overflow-style: none !important;
    width: 100% !important;
    padding-bottom: 8px !important;
    gap: 8px !important;
  }

  .wotg-pills-list::-webkit-scrollbar,
  .divs-pills-con::-webkit-scrollbar {
    display: none !important;
  }

  .wotg-pill-btn,
  .divs-pills-con a {
    flex-shrink: 0 !important;
    white-space: nowrap !important;
    padding: 9px 16px !important;
    font-size: 13px !important;
    border-radius: 9999px !important;
  }

  /* Destination Cards Grid on Mobile */
  .wotg-dest-grid {
    grid-template-columns: 1fr !important;
    gap: 20px !important;
  }

  .wotg-card-media {
    height: 220px !important;
  }

  .wotg-card-body {
    padding: 18px 14px !important;
  }

  .wotg-card-title {
    font-size: 19px !important;
    line-height: 1.25 !important;
  }

  .wotg-card-excerpt {
    font-size: 13.5px !important;
    line-height: 1.55 !important;
    margin-bottom: 14px !important;
  }

  /* Gazette Newsletter Box on Mobile */
  #gazette_box_con,
  [data-id="gazette_box_con"],
  .wotg-dispatch-box {
    padding: 24px 16px !important;
    border-radius: 18px !important;
  }

  .gazette-inner-flex,
  .wotg-dispatch-form {
    flex-direction: column !important;
    gap: 12px !important;
  }

  .gazette-form-row input,
  .gazette-form-row button,
  .wotg-dispatch-input,
  .wotg-dispatch-btn {
    width: 100% !important;
    box-sizing: border-box !important;
    border-radius: 12px !important;
    font-size: 15px !important;
    padding: 13px 16px !important;
  }
}

/* Extra Compact Mobile Devices (<= 375px & iPhone SE) */
@media screen and (max-width: 375px) {
  .hero-headline {
    font-size: 23px !important;
  }
  .wotg-card-title {
    font-size: 17.5px !important;
  }
  .wotg-card-media {
    height: 195px !important;
  }
}
"""

# Read existing CSS
get_code = "$css = wp_get_custom_css(); echo $css;"
payload = json.dumps({'code': get_code})
cmd = ['novamira', 'run', 'novamira/execute-php', '--yes', '--input', payload]
res = subprocess.run(cmd, capture_output=True, text=True)
current_css = json.loads(res.stdout).get('output', '')

print(f"Current CSS length: {len(current_css)}")

# Append our master responsive and aesthetic suite
updated_css = current_css + "\n" + enhancements

# Update WordPress custom CSS
update_code = f"""
$new_css = {json.dumps(updated_css)};
$res = wp_update_custom_css_post($new_css);
if (is_wp_error($res)) {{
    echo "ERROR: " . $res->get_error_message();
}} else {{
    echo "SUCCESS: Updated custom CSS (new length: " . strlen($new_css) . ")";
}}
"""

payload = json.dumps({'code': update_code})
cmd = ['novamira', 'run', 'novamira/execute-php', '--yes', '--input', payload]
res = subprocess.run(cmd, capture_output=True, text=True)
out = json.loads(res.stdout).get('output', '')
print(out)

# Purge LiteSpeed Cache
purge_cmd = ['novamira', 'run', 'novamira/run-wp-cli', '--yes', '--input', json.dumps({'args': ['litespeed-purge', 'all']})]
res_purge = subprocess.run(purge_cmd, capture_output=True, text=True)
print("Purge response:", res_purge.stdout)
