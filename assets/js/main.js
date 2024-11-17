document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  const expandedIcon = document.getElementById('expanded-icon');
  const collapsedIcon = document.getElementById('small-icon');
  const themeToggle = document.getElementById('main-theme-toggle');
  const dropdownThemeToggle = document.getElementById('dropdown-theme-toggle');
  const moonIcon = themeToggle.querySelector('svg:first-of-type');
  const sunIcon = themeToggle.querySelector('svg:last-of-type');
  const menuModalButton = document.getElementById('menu-modal');
  const menuCloseButton = document.getElementById('menu-close');
  const sidebarContainer = document.getElementById('sidebar-container');
  const overlay = document.getElementById('overlay');
  const dropdownButton = document.getElementById('dropdownButton');
  const dropdownMenu = document.getElementById('dropdownMenu');
  const notificationButton = document.getElementById('notificationButton');
  const notificationDropdown = document.getElementById('notificationDropdown');

  if (menuToggle && sidebar && expandedIcon && collapsedIcon) {
    menuToggle.addEventListener('click', function() {
      sidebar.classList.toggle('collapsed');

      // Toggle icon visibility
      if (sidebar.classList.contains('collapsed')) {
        expandedIcon.classList.add('d-none');
        expandedIcon.classList.remove('d-block');
        collapsedIcon.classList.remove('d-none');
        collapsedIcon.classList.add('d-block');
      } else {
        expandedIcon.classList.remove('d-none');
        expandedIcon.classList.add('d-block');
        collapsedIcon.classList.add('d-none');
        collapsedIcon.classList.remove('d-block');
      }

      updateLogos();
      updateButtonContent();
      updateDropdownIcon();
      updateUserInfo();
    });
  } else {
    console.error('One or more elements not found:', { menuToggle, sidebar, expandedIcon, collapsedIcon });
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      updateLogos();

      // Toggle moon and sun icon visibility
      moonIcon.classList.toggle('d-none');
      sunIcon.classList.toggle('d-none');
    });
  } else {
    console.error('Theme toggle button not found:', themeToggle);
  }

  if (dropdownThemeToggle) {
    dropdownThemeToggle.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      updateLogos();

      // Toggle moon and sun icon visibility
      moonIcon.classList.toggle('d-none');
      sunIcon.classList.toggle('d-none');
    });
  } else {
    console.error('Dropdown theme toggle button not found:', dropdownThemeToggle);
  }

  // Toggle sidebar and overlay for mobile
  if (menuModalButton) {
    menuModalButton.addEventListener('click', () => {
      sidebarContainer.classList.toggle('active');
      overlay.classList.toggle('active');
    });
  }

  // Close sidebar and overlay when close button is clicked
  if (menuCloseButton) {
    menuCloseButton.addEventListener('click', () => {
      sidebarContainer.classList.remove('active');
      overlay.classList.remove('active');
    });
  }

  // Close sidebar and overlay when overlay is clicked
  if (overlay) {
    overlay.addEventListener('click', () => {
      sidebarContainer.classList.remove('active');
      overlay.classList.remove('active');
    });
  }

  // Toggle notification dropdown
  if (notificationButton && notificationDropdown) {
    notificationButton.addEventListener('click', (event) => {
      event.stopPropagation();
      notificationDropdown.classList.toggle('d-none');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (event) => {
      if (!notificationButton.contains(event.target) && !notificationDropdown.contains(event.target)) {
        notificationDropdown.classList.add('d-none');
      }
    });
  }

  // Toggle dropdown menu
  if (dropdownButton && dropdownMenu) {
    dropdownButton.addEventListener('click', (event) => {
      event.stopPropagation(); // Prevent event from bubbling up
      dropdownMenu.classList.toggle('d-none'); // Toggle visibility
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (event) => {
      if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.add('d-none'); // Hide dropdown
      }
    });
  }

  // Event delegation for dropdown buttons
  document.body.addEventListener('click', function(event) {
    const isDropdownButton = event.target.closest('.dropdownButton');
    const isDropdownMenu = event.target.closest('.dropdownMenu');

    // Close all dropdowns if click is outside
    if (!isDropdownButton && !isDropdownMenu) {
      document.querySelectorAll('.dropdownMenu').forEach(menu => {
        menu.classList.add('d-none');
      });
    }

    // Toggle the dropdown menu visibility
    if (isDropdownButton) {
      const dropdownMenu = isDropdownButton.nextElementSibling;
      if (dropdownMenu && dropdownMenu.classList.contains('dropdownMenu')) {
        // Close all other dropdowns
        document.querySelectorAll('.dropdownMenu').forEach(menu => {
          if (menu !== dropdownMenu) {
            menu.classList.add('d-none');
          }
        });

        // Toggle the current dropdown
        dropdownMenu.classList.toggle('d-none');
      }
    }
  });
});

// Close dropdowns when clicking outside
document.addEventListener('click', function() {
  document.querySelectorAll('.options-dropdown').forEach(dropdown => {
    dropdown.classList.add('hidden');
  });
});

document.querySelector('.btn-sidebar-footer').addEventListener('click', function(event) {
  event.stopPropagation();
  const userMenu = document.getElementById('user-menu');
  userMenu.classList.toggle('d-none');
});

document.addEventListener('click', function(event) {
  const userMenu = document.getElementById('user-menu');
  const button = document.querySelector('.btn-sidebar-footer');
  
  if (!button.contains(event.target) && !userMenu.contains(event.target)) {
    userMenu.classList.add('d-none');
  }
});

function updateLogos() {
  const isDarkMode = document.body.classList.contains('dark-mode');
  const isCollapsed = document.getElementById('sidebar').classList.contains('collapsed');

  const logoFullLight = document.querySelector('.logo-full-light');
  const logoFullDark = document.querySelector('.logo-full-dark');
  const logoIconLight = document.querySelector('.logo-icon-light');
  const logoIconDark = document.querySelector('.logo-icon-dark');

  if (logoFullLight) logoFullLight.classList.toggle('d-none', isDarkMode || isCollapsed);
  if (logoFullDark) logoFullDark.classList.toggle('d-none', !isDarkMode || isCollapsed);
  if (logoIconLight) logoIconLight.classList.toggle('d-none', isDarkMode || !isCollapsed);
  if (logoIconDark) logoIconDark.classList.toggle('d-none', !isDarkMode || !isCollapsed);

  document.querySelectorAll('.nav-main-text').forEach(text => {
    if (text) text.classList.toggle('d-none', isCollapsed);
  });
  document.querySelectorAll('.nav-dot').forEach(dot => {
    if (dot) dot.classList.toggle('d-none', !isCollapsed);
  });

  const navHeader = document.querySelector('.sidebar-nav-header');
  if (navHeader) {
    navHeader.classList.toggle('justify-content-center', isCollapsed);
    navHeader.classList.toggle('justify-content-start', !isCollapsed);
  }

  document.querySelectorAll('.sidebar-nav-item').forEach(item => {
    if (item) {
      item.classList.toggle('justify-content-center', isCollapsed);
      item.classList.toggle('justify-content-start', !isCollapsed);
      const navLink = item.querySelector('.sidebar-nav-link');
      if (navLink) navLink.classList.toggle('d-none', isCollapsed);
    }
  });
}

function updateButtonContent() {
  const isCollapsed = document.getElementById('sidebar').classList.contains('collapsed');
  const buttonContent = document.querySelector('.btn-sidebar-footer .flex-column');
  buttonContent.classList.toggle('d-none', isCollapsed);
}

function updateDropdownIcon() {
  const isCollapsed = document.getElementById('sidebar').classList.contains('collapsed');
  const dropdownIcon = document.querySelector('.dropdown-icon');
  dropdownIcon.classList.toggle('d-none', isCollapsed);
}

function updateUserInfo() {
  const isCollapsed = document.getElementById('sidebar').classList.contains('collapsed');
  const userInfo = document.querySelector('.user-info');
  userInfo.classList.toggle('d-none', isCollapsed);
}

document.querySelectorAll('.custom-dropdown').forEach(dropdown => {
    const toggleButton = dropdown.querySelector('.dropdown-toggle');
    const menu = dropdown.querySelector('.dropdownMenu');

    toggleButton.addEventListener('click', () => {
        menu.classList.toggle('d-none');
    });

    menu.querySelectorAll('.dropdownItem').forEach(item => {
        item.addEventListener('click', () => {
            toggleButton.textContent = item.textContent;
            menu.classList.add('d-none');
            // Handle the selection logic here
        });
    });
});

