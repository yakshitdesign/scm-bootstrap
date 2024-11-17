document.addEventListener('DOMContentLoaded', function() {
    const employees = [
        {
            id: 1,
            name: {
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
                fullName: "Neil Sims",
                email: "neil.sims@mail.com"
            },
            role: "Project Manager",
            availability: "Full Time",
            location: {
                address: "1835 Lexington Avenue, Houston",
                details: "TX 77006, United States"
            },
            amount: "$1,240.23",
            status: "Active"
        },
        {
            id: 2,
            name: {
                image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
                fullName: "Michael Chen",
                email: "michael.chen@mail.com"
            },
            role: "Senior Developer",
            availability: "Part Time",
            location: {
                address: "742 Broadway Street, Seattle",
                details: "WA 98101, United States"
            },
            amount: "$2,350.00",
            status: "Inactive"
        },
        {
            id: 3,
            name: {
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
                fullName: "Emma Wilson",
                email: "emma.w@mail.com"
            },
            role: "UI/UX Designer",
            availability: "Full Time",
            location: {
                address: "563 Park Avenue, New York",
                details: "NY 10022, United States"
            },
            amount: "$1,890.50",
            status: "Active"
        },
        {
            id: 4,
            name: {
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
                fullName: "Sarah Johnson",
                email: "sarah.j@mail.com"
            },
            role: "Frontend Developer",
            availability: "Contract",
            location: {
                address: "892 Valencia Street, San Francisco",
                details: "CA 94110, United States"
            },
            amount: "$1,650.75",
            status: "Active"
        },
        {
            id: 5,
            name: {
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
                fullName: "David Brown",
                email: "david.brown@mail.com"
            },
            role: "Backend Developer",
            availability: "Full Time",
            location: {
                address: "1247 Beacon Street, Boston",
                details: "MA 02446, United States"
            },
            amount: "$2,120.00",
            status: "Active"
        },
        {
            id: 6,
            name: {
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
                fullName: "James Wilson",
                email: "james.w@mail.com"
            },
            role: "DevOps Engineer",
            availability: "Remote",
            location: {
                address: "435 Pine Street, Portland",
                details: "OR 97204, United States"
            },
            amount: "$2,450.30",
            status: "Inactive"
        },
        {
            id: 7,
            name: {
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
                fullName: "Lisa Anderson",
                email: "lisa.a@mail.com"
            },
            role: "Product Manager",
            availability: "Full Time",
            location: {
                address: "678 Michigan Avenue, Chicago",
                details: "IL 60601, United States"
            },
            amount: "$2,800.00",
            status: "Active"
        },
        {
            id: 8,
            name: {
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
                fullName: "Robert Martinez",
                email: "robert.m@mail.com"
            },
            role: "QA Engineer",
            availability: "Contract",
            location: {
                address: "910 Congress Avenue, Austin",
                details: "TX 78701, United States"
            },
            amount: "$1,750.60",
            status: "Active"
        },
        {
            id: 9,
            name: {
                image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
                fullName: "Emily Davis",
                email: "emily.d@mail.com"
            },
            role: "Data Scientist",
            availability: "Remote",
            location: {
                address: "223 Peachtree Street, Atlanta",
                details: "GA 30303, United States"
            },
            amount: "$2,930.45",
            status: "Inactive"
        },
        {
            id: 10,
            name: {
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
                fullName: "Thomas Wright",
                email: "thomas.w@mail.com"
            },
            role: "Systems Architect",
            availability: "Full Time",
            location: {
                address: "456 Ocean Drive, Miami",
                details: "FL 33139, United States"
            },
            amount: "$3,150.80",
            status: "Active"
        },
        {
            id: 11,
            name: {
                image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
                fullName: "Alex Thompson",
                email: "alex.t@mail.com"
            },
            role: "Mobile Developer",
            availability: "Remote",
            location: {
                address: "789 Market Street, Denver",
                details: "CO 80202, United States"
            },
            amount: "$2,480.90",
            status: "Active"
        },
        {
            id: 12,
            name: {
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
                fullName: "Sophie Clark",
                email: "sophie.c@mail.com"
            },
            role: "UI Developer",
            availability: "Part Time",
            location: {
                address: "321 Main Street, Nashville",
                details: "TN 37201, United States"
            },
            amount: "$1,890.75",
            status: "Inactive"
        },
        {
            id: 13,
            name: {
                image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61",
                fullName: "Daniel Lee",
                email: "daniel.l@mail.com"
            },
            role: "Security Engineer",
            availability: "Full Time",
            location: {
                address: "567 Pike Place, Seattle",
                details: "WA 98101, United States"
            },
            amount: "$2,750.60",
            status: "Active"
        },
        {
            id: 14,
            name: {
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
                fullName: "Rachel Green",
                email: "rachel.g@mail.com"
            },
            role: "Cloud Architect",
            availability: "Contract",
            location: {
                address: "890 Bourbon Street, New Orleans",
                details: "LA 70116, United States"
            },
            amount: "$3,200.40",
            status: "Active"
        },
        {
            id: 15,
            name: {
                image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
                fullName: "Kevin Parker",
                email: "kevin.p@mail.com"
            },
            role: "Full Stack Developer",
            availability: "Remote",
            location: {
                address: "234 South Street, Philadelphia",
                details: "PA 19147, United States"
            },
            amount: "$2,960.30",
            status: "Inactive"
        },
        {
            id: 16,
            name: {
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
                fullName: "Maria Rodriguez",
                email: "maria.r@mail.com"
            },
            role: "Database Administrator",
            availability: "Full Time",
            location: {
                address: "456 Castro Street, San Francisco",
                details: "CA 94114, United States"
            },
            amount: "$2,340.80",
            status: "Active"
        },
        {
            id: 17,
            name: {
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
                fullName: "Chris Evans",
                email: "chris.e@mail.com"
            },
            role: "Network Engineer",
            availability: "Contract",
            location: {
                address: "789 Rainey Street, Austin",
                details: "TX 78701, United States"
            },
            amount: "$2,180.90",
            status: "Active"
        },
        {
            id: 18,
            name: {
                image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
                fullName: "Amanda White",
                email: "amanda.w@mail.com"
            },
            role: "Business Analyst",
            availability: "Part Time",
            location: {
                address: "123 Pearl Street, Portland",
                details: "ME 04101, United States"
            },
            amount: "$1,920.45",
            status: "Inactive"
        },
        {
            id: 19,
            name: {
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
                fullName: "Ryan Cooper",
                email: "ryan.c@mail.com"
            },
            role: "Solutions Architect",
            availability: "Full Time",
            location: {
                address: "567 Canal Street, New York",
                details: "NY 10013, United States"
            },
            amount: "$3,450.60",
            status: "Active"
        },
        {
            id: 20,
            name: {
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
                fullName: "Jessica Taylor",
                email: "jessica.t@mail.com"
            },
            role: "ML Engineer",
            availability: "Remote",
            location: {
                address: "890 Washington Street, Boston",
                details: "MA 02108, United States"
            },
            amount: "$3,180.25",
            status: "Active"
        }
    ];

    const isIndexPage = window.location.pathname.includes('index.html');
    
    $('#employeeTable').DataTable({
        data: isIndexPage ? employees.slice(0, 5) : employees,
        columns: [
            {
                data: null,
                orderable: false,
                className: 'align-middle text-start tableCell',
                render: function() {
                    return `
                        <div class="d-flex justify-content-center align-items-center">
                            <input type="checkbox" class="form-check-input row-checkbox">
                        </div>`;
                }
            },
            {
                data: 'name',
                className: 'align-middle text-start tableCell',
                render: function(data) {
                    return `
                        <div class="d-flex align-items-center">
                            <img class="rounded-circle" src="${data.image}" alt="Profile image" style="width: 32px; height: 32px; object-fit: cover;">
                            <div class="ps-3">
                                <div class="text-sm fw-medium">${data.fullName}</div>
                                <div class="text-xs" style="opacity: 0.7;">${data.email}</div>
                            </div>
                        </div>`;
                }
            },
            { 
                data: 'role',
                className: 'align-middle text-start tableCell',
                render: function(data) {
                    return `<div class="d-flex align-items-center text-sm">${data}</div>`;
                }
            },
            { 
                data: 'availability',
                className: 'align-middle text-start tableCell',
                render: function(data) {
                    return `<div class="d-flex align-items-center text-sm">${data}</div>`;
                }
            },
            {
                data: 'location',
                className: 'align-middle text-start tableCell',
                render: function(data) {
                    return `
                        <div class="d-flex align-items-center">
                            <div class="d-flex flex-column">
                                <div class="text-sm">${data.address}</div>
                                <div class="text-xs" style="opacity: 0.7;">${data.details}</div>
                            </div>
                        </div>`;
                }
            },
            { 
                data: 'amount',
                className: 'align-middle text-start tableCell',
                render: function(data) {
                    return `<div class="d-flex align-items-center text-sm">${data}</div>`;
                }
            },
            {
                data: 'status',
                className: 'align-middle text-start tableCell',
                render: function(data) {
                    const isActive = data === 'Active';
                    const colorClass = isActive ? 'success' : 'danger';
                    const themeClass = document.body.classList.contains('dark-mode') ? 'dark-mode' : '';

                    return `
                        <span class="badge ${colorClass} ${themeClass}">
                            <svg width="8" height="8" class="me-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="4" cy="4" r="3" />
                            </svg>
                            ${data} 
                        </span>`;
                }
            },
            {
                data: null,
                orderable: false,
                className: 'align-middle text-start tableCell',
                render: function() {
                    return `
                        <div class="position-relative">
                            <button class="dropdownButton table-action">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none">
                                    <path d="M11.9922 12H12.0012" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M17.992 12H18.001" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M5.99981 12H6.00879" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                            <div class="dropdownMenu d-none position-absolute end-0 mt-2">
                                <a href="./employee/view.html" style="text-decoration: none; color: inherit;">
                                    <button class="dropdownItem">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none">
                                            <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M22 14C22 13.6845 21.848 13.4713 21.544 13.045C20.1779 11.1294 16.6892 7 12 7C7.31078 7 3.8221 11.1294 2.45604 13.045C2.15201 13.4713 2 13.6845 2 14C2 14.3155 2.15201 14.5287 2.45604 14.955C3.8221 16.8706 7.31078 21 12 21C16.6892 21 20.1779 16.8706 21.544 14.955C21.848 14.5287 22 14.3155 22 14ZM12 11C13.6569 11 15 12.3431 15 14C15 15.6569 13.6569 17 12 17C10.3431 17 9 15.6569 9 14C9 12.3431 10.3431 11 12 11Z" fill="currentColor" />
                                            <path d="M2 8C2 8 6.47715 3 12 3C17.5228 3 22 8 22 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                            <path d="M21.544 13.045C21.848 13.4713 22 13.6845 22 14C22 14.3155 21.848 14.5287 21.544 14.955C20.1779 16.8706 16.6892 21 12 21C7.31078 21 3.8221 16.8706 2.45604 14.955C2.15201 14.5287 2 14.3155 2 14C2 13.6845 2.15201 13.4713 2.45604 13.045C3.8221 11.1294 7.31078 7 12 7C16.6892 7 20.1779 11.1294 21.544 13.045Z" stroke="currentColor" stroke-width="1.5" />
                                            <path d="M15 14C15 12.3431 13.6569 11 12 11C10.3431 11 9 12.3431 9 14C9 15.6569 10.3431 17 12 17C13.6569 17 15 15.6569 15 14Z" stroke="currentColor" stroke-width="1.5" />
                                        </svg>
                                        View
                                    </button>
                                </a>
                                <a href="./employee/edit.html" style="text-decoration: none; color: inherit;">
                                    <button class="dropdownItem">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none">
                                            <path opacity="0.4" d="M3.26538 21.9613L3.54536 21.9686C5.6032 22.0224 6.63212 22.0493 7.56806 21.6837C8.504 21.3182 9.25287 20.5969 10.7506 19.1543L10.7506 19.1543L19.655 10.5779L13.5 4.5L4.78943 13.9445C3.57944 15.2555 2.97444 15.9109 2.62371 16.7182C2.27297 17.5255 2.20301 18.4235 2.06308 20.2197L2.03608 20.5662C1.98636 21.2043 1.9615 21.5234 2.14359 21.73C2.32567 21.9367 2.63891 21.9449 3.26538 21.9613Z" fill="currentColor" />
                                            <path d="M14.0737 3.88545C14.8189 3.07808 15.1915 2.6744 15.5874 2.43893C16.5427 1.87076 17.7191 1.85309 18.6904 2.39232C19.0929 2.6158 19.4769 3.00812 20.245 3.79276C21.0131 4.5774 21.3972 4.96972 21.6159 5.38093C22.1438 6.37312 22.1265 7.57479 21.5703 8.5507C21.3398 8.95516 20.9446 9.33578 20.1543 10.097L10.7506 19.1543C9.25288 20.5969 8.504 21.3182 7.56806 21.6837C6.63212 22.0493 5.6032 22.0224 3.54536 21.9686L3.26538 21.9613C2.63891 21.9449 2.32567 21.9367 2.14359 21.73C1.9615 21.5234 1.98636 21.2043 2.03608 20.5662L2.06308 20.2197C2.20301 18.4235 2.27297 17.5255 2.62371 16.7182C2.97444 15.9109 3.57944 15.2555 4.78943 13.9445L14.0737 3.88545Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                                            <path d="M13 4L20 11" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                                            <path d="M14 22L22 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        Edit
                                    </button>
                                </a>
                                <button class="dropdownItem delete-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none">
                                        <path opacity="0.4" d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5H19.5Z" fill="currentColor" />
                                        <path d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                        <path d="M21 5.5H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                        <path d="M16.0575 5.5L15.3748 4.09173C14.9213 3.15626 14.6946 2.68852 14.3035 2.39681C14.2167 2.3321 14.1249 2.27454 14.0288 2.2247C13.5957 2 13.0759 2 12.0363 2C10.9706 2 10.4377 2 9.99745 2.23412C9.89986 2.28601 9.80675 2.3459 9.71906 2.41317C9.3234 2.7167 9.10239 3.20155 8.66037 4.17126L8.05469 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                        <path d="M9.5 16.5L9.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                        <path d="M14.5 16.5L14.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                    </svg>
                                    Delete
                                </button>
                            </div>
                        </div>`;
                }
            }
        ],
        paging: !isIndexPage,
        info: !isIndexPage,
        searching: !isIndexPage,
        lengthChange: !isIndexPage,
        dom: isIndexPage ? 't' : '<"table-responsive"t><"d-flex justify-content-between align-items-center p-3"<"d-none d-md-flex text-muted"i><"d-flex align-items-center gap-2"p><"custom-length-menu-container">>',
        language: {
            search: "",
            searchPlaceholder: "Search...",
            lengthMenu: "_MENU_ / page",
            info: "Page _PAGE_ of _PAGES_",
            paginate: {
                first: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none"><path d="M15 6L9 12.0001L15 18" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="16" stroke-linecap="round" stroke-linejoin="round" /></svg>',
                last: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none"><path d="M9.00005 6L15 12L9 18" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="16" stroke-linecap="round" stroke-linejoin="round" /></svg>',
                next: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none">
                    <path d="M9.00005 6L15 12L9 18" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="16" stroke-linecap="round" stroke-linejoin="round" />
                </svg>`,
                previous: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none">
                    <path d="M15 6L9 12.0001L15 18" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="16" stroke-linecap="round" stroke-linejoin="round" />
                </svg>`
            }
        },
        pagingType: "numbers",
        pageLength: 12,
        lengthMenu: [12, 24, 36, 48],
        order: [[1, 'asc']],
        drawCallback: function(settings) {
            const api = this.api();
            const pageInfo = api.page.info();

            if (pageInfo.pages > 1) {
                let html = `
                    <div class="d-flex align-items-center gap-2">
                        <button class="btn btn-outline-secondary">${settings.oLanguage.oPaginate.previous}</button>
                        <div class="d-flex gap-1">`;

                html += createPageButton(1, pageInfo.page === 0);

                if (pageInfo.page > 2) {
                    html += createEllipsis();
                } else if (pageInfo.pages > 1) {
                    html += createPageButton(2, pageInfo.page === 1);
                }

                for (let i = Math.max(2, pageInfo.page - 1); i <= Math.min(pageInfo.pages - 1, pageInfo.page + 1); i++) {
                    html += createPageButton(i + 1, pageInfo.page === i);
                }

                if (pageInfo.page < pageInfo.pages - 3) {
                    html += createEllipsis();
                } else if (pageInfo.pages > 1) {
                    html += createPageButton(pageInfo.pages - 1, pageInfo.page === pageInfo.pages - 2);
                }

                if (pageInfo.pages > 1) {
                    html += createPageButton(pageInfo.pages, pageInfo.page === pageInfo.pages - 1);
                }

                html += `
                        </div>
                        <button class="btn btn-outline-secondary">${settings.oLanguage.oPaginate.next}</button>
                    </div>`;

                $(this).find('.dataTables_paginate').html(html);

                $(this).find('.dataTables_paginate button[data-page]').on('click', function() {
                    const page = $(this).data('page');
                    api.page(page - 1).draw('page');
                });
            }

            const existingMenu = document.querySelector('.custom-length-menu');
            const lengthMenuContainer = document.querySelector('.custom-length-menu-container');
            
            if (!existingMenu && lengthMenuContainer) {
                const button = document.createElement('button');
                button.className = 'outline-button custom-length-menu d-none d-md-flex gap-1 align-items-center position-relative';
                button.style.width = 'fit-content';
                button.style.justifyContent = 'space-between';
                button.innerHTML = `
                    <span style="text-wrap: nowrap;">${settings._iDisplayLength} / page</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none">
                        <path d="M5.99977 9.00005L11.9998 15L17.9998 9" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="16" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                `;
                
                button.onclick = function() {
                    const existingDropdown = document.querySelector('.length-menu-dropdown');
                    if (existingDropdown) {
                        existingDropdown.remove();
                        return;
                    }

                    const menu = document.createElement('div');
                    menu.className = 'length-menu-dropdown';
                    
                    [10, 25, 50, 100].forEach(number => {
                        const option = document.createElement('button');
                        option.className = `length-menu-option ${settings._iDisplayLength === number ? '' : ''}`;
                        option.textContent = `${number} / page`;
                        option.onclick = function() {
                            settings.oInstance.fnSettings()._iDisplayLength = number;
                            settings.oInstance.fnDraw();
                        };
                        menu.appendChild(option);
                    });
                    
                    lengthMenuContainer.appendChild(menu);
                    
                    document.addEventListener('click', function closeMenu(e) {
                        if (!menu.contains(e.target) && !button.contains(e.target)) {
                            menu.remove();
                            document.removeEventListener('click', closeMenu);
                        }
                    });
                };
                
                lengthMenuContainer.appendChild(button);
            } else if (existingMenu) {
                const displayText = existingMenu.querySelector('span');
                if (displayText) {
                    displayText.textContent = `${settings._iDisplayLength} / page`;
                }
            }

            const selectAllCheckbox = document.querySelector('.select-all-checkbox');
            const rowCheckboxes = document.querySelectorAll('.row-checkbox');

            if (selectAllCheckbox) {
                selectAllCheckbox.addEventListener('change', function() {
                    rowCheckboxes.forEach(checkbox => {
                        checkbox.checked = this.checked;
                    });
                });
            }

            rowCheckboxes.forEach(checkbox => {
                checkbox.addEventListener('change', function() {
                    const allChecked = [...rowCheckboxes].every(cb => cb.checked);
                    const someChecked = [...rowCheckboxes].some(cb => cb.checked);
                    
                    if (selectAllCheckbox) {
                        selectAllCheckbox.checked = allChecked;
                        selectAllCheckbox.indeterminate = someChecked && !allChecked;
                    }
                });
            });

            $('.paginate_button').each(function() {
                $(this).css({
                    'display': 'flex',
                    'align-items': 'center',
                    'justify-content': 'center',
                });
            });

            $('.dataTables_paginate').addClass('d-flex align-items-center')
                .css({
                    'display': 'flex',
                    'align-items': 'center'
                });

            $('.dataTables_paginate span').addClass('d-flex gap-1')
                .css({
                    'display': 'flex',
                    'gap': '0.25rem'
                });

            $('.dataTables_info').addClass('dataTables_info');

            $('.pagination').addClass('d-flex gap-1 mb-0');
        },
        createdRow: function(row, data, dataIndex) {
            $(row).addClass('custom-row-class');
            
            $(row).find('td').addClass('align-middle');
            
            $(row).find('td').each(function() {
                const content = $(this).html();
                if (!content.includes('div class="')) {
                    $(this).html(`<div class="d-flex align-items-center">${content}</div>`);
                }
            });
        },
        initComplete: function() {
            $('#employeeTable th').css('width', 'auto');
        },
        ordering: true
    });

    function createPageButton(number, isActive) {
        const buttonClass = isActive 
            ? 'p-2 rounded bg-light text-dark'
            : 'p-2 rounded bg-white hover-bg-light text-muted hover-text-dark';
        
        return `
            <button class="${buttonClass}" data-page="${number}">
                <span style="width: 20px; height: 20px;" class="d-flex align-items-center justify-content-center">
                    ${number}
                </span>
            </button>
        `;
    }

    function createEllipsis() {
        return `
            <button class="p-2 rounded bg-white text-muted">
                <span style="width: 20px; height: 20px;" class="d-flex align-items-center justify-content-center">
                    ...
                </span>
            </button>
        `;
    }
});
