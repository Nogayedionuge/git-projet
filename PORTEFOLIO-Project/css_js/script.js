        //Nogaye Diongue
        

        let tablinks = document.getElementsByClassName("tab-links");
        let tabcontents = document.getElementsByClassName("tab-contents");

        //pour enlever les sous-ligne des liens et masquer leurs contenu en cliquant sur le lien desirer
        function opentab(tabname) {
            for (tablink of tablinks) {
                tablink.classList.remove("active-link");
            }
            for (tabcontent of tabcontents) {
                tabcontent.classList.remove("active-tab");
            }
            
            //pour activer le lien et afficher son contenu en cliquant desus
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }