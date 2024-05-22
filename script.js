    document.addEventListener('DOMContentLoaded', function() {
            var urlParams = new URLSearchParams(window.location.search);
            var query = urlParams.get('query');
            
            if (query) {
                query = query.toLowerCase();
                var sections = document.querySelectorAll('.scrollspy-example-2 div[id]');
                
                sections.forEach(function(section) {
                    if (section.innerText.toLowerCase().includes(query)) {
                        section.scrollIntoView({ behavior: 'smooth' });
                        highlightSection(section);
                    }
                });
            }
        });

        function highlightSection(section) {
            section.style.backgroundColor = 'yellow'; // Temporary highlight
            setTimeout(function() {
                section.style.backgroundColor = '';
            }, 2000); // Remove highlight after 2 seconds
        }

   
