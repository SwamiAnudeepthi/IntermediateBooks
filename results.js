const books = [
    { "Book Name": "Mechanics for JEE Main & Advanced", "class": "12", "vol": "1", "Author": "Anurag Mishra", "Subject": "Physics", "Download Link": "https://drive.google.com/file/d/1ivT7n-wwQQkOZQzkwpQz1IXkedzZkNDK/view", "Publisher": "N/A" },
    { "Book Name": "Mechanics for JEE Main & Advanced", "class": "12", "vol": "2", "Author": "Anurag Mishra", "Subject": "Physics", "Download Link": "https://drive.google.com/file/d/1cjhw-av7kVDmY5xo_bgDxPjz6LyVOvSW/view", "Publisher": "N/A" },
    { "Book Name": "Heat and Thermodynamics", "vol": "1", "class": "12", "Author": "Anurag Mishra", "Subject": "Physics", "Download Link": "https://drive.google.com/file/d/1LZjdYu9DJ90BPwE1uZMlDnXSbXSWYITl/view", "Publisher": "N/A" },
    { "Book Name": "Electricity and magnetism", "class": "12", "vol": "1", "Author": "Anurag Mishra", "Subject": "Physics", "Download Link": "https://drive.google.com/file/d/1UrqvjxTN9VEYAovHZrbSlw4EtZc7y_aD/view", "Publisher": "N/A" },
    { "Book Name": "Optics", "vol": "1", "class": "12", "Author": "Anurag Mishra", "Subject": "Physics", "Download Link": "https://drive.google.com/file/d/1kpbcnu9I_gqhA1P39oTrjsr_ANt4hQH0/view", "Publisher": "N/A" },
    { "Book Name": "Understanding Physics Mechanics", "vol": "1", "class": "11", "Author": "Arihant DC Pandey", "Subject": "Physics", "Download Link": "https://drive.google.com/file/d/1Z3_cxC4ahhNV4_wpVrJgKcJLnL6I3Ml6/view", "Publisher": "N/A" },
    { "Book Name": "Understanding Physics Mechanics", "vol": "2", "class": "11", "Author": "Arihant DC Pandey", "Subject": "physics", "Download Link": "https://drive.google.com/file/d/1wvb2BEwAmSxCLktxDHivY4T4PgcL8unC/view", "Publisher": "N/A" },
    { "Book Name": "Waves and Thermodynamics", "vol": "3", "class": "11", "Author": "Arihant DC Pandey", "Subject": "physics", "Download Link": "https://drive.google.com/file/d/1yYeNbZ_XWDcv_3dkrP9Z3CAFCW13KCAE/view", "Publisher": "N/A" },
    { "Book Name": "Electricity and Machanism", "vol": "4", "class": "11", "Author": "Arihant DC Pandey", "Subject": "physics", "Download Link": "https://drive.google.com/file/d/1_Bni1_V-TJgpHmLyblcKBUClJHgJx4Bb/view", "Publisher": "N/A" },
    { "Book Name": "OPTICS AND MODERN PHYSICS", "vol": "5", "class": "11", "Author": "Arihant DC Pandey", "Subject": "physics", "Download Link": "https://drive.google.com/file/d/1I4r8ykLCrQGagn4Vg78E0YttJfFTTl8Y/view", "Publisher": "N/A" },
    { "Book Name": "NCERT", "vol": "1", "class": "11", "Author": "N/A", "Subject": "Biology", "Download Link": "https://drive.google.com/file/d/1Hv0KgjniFL2FCRt4Rapbc0kdFq4-Gwiv/edit", "Publisher": "N/A" },
    { "Book Name": "Fundamentals of Physics", "vol": "10", "class": "12", "Author": "N/A", "Subject": "Physics", "Download Link": "https://archive.org/details/fundamentals-of-physics/page/700/mode/2up", "Publisher": "N/A" },
    { "Book Name": "Fundamentals of Physics", "vol": "11", "class": "12", "Author": "Halliday, Resnick, and Walker", "Subject": "Physics", "Download Link": "https://drive.google.com/file/d/0B0RD0tI0Zxl4UmRTVURTYUtkcGs/edit?resourcekey=0-hlT2weW5t87Xsfl75qzQsA", "Publisher": "N/A" },
    { "Book Name": "Problems in General Physics", "vol": "1", "class": "12", "Author": "I.E Irodov", "Subject": "Physics", "Download Link": "https://archive.org/details/IrodovProblemsInGeneralPhysics/mode/2up", "Publisher": "Mascow" },
    { "Book Name": "Mysteries of Modern Physics Time", "vol": "1", "class": "12", "Author": "N/A", "Subject": "Physics", "Download Link": "https://archive.org/details/MysteriesOfModernPhysicsTime/page/n165/mode/2up", "Publisher": "N/A" },
    { "Book Name": "Physics for scientists and engineers with modern physics", "vol": "1", "class": "12", "Author": "Serway, Raymond A", "Subject": "Physics", "Download Link": "https://archive.org/details/physicsforscient0004serw", "Publisher": "N/A" },
    { "Book Name": "Physics for scientists and engineers with modern physics", "vol": "4", "class": "12", "Author": "Serway, Raymond A", "Subject": "Physics", "Download Link": "https://archive.org/details/physicsforscient0004serw/page/978/mode/2up", "Publisher": "N/A" },
    { "Book Name": "Industrial physics; Mechanics", "vol": "4", "class": "12", "Author": " Smith, L. Raymond ", "Subject": "Physics", "Download Link": "https://archive.org/details/industrialphysic00smitrich/page/n13/mode/2up", "Publisher": "N/A" },
    { "Book Name": "Elementary Mechanics", "vol": "1", "class": "12", "Author": "N/A", "Subject": "Physics", "Download Link": "https://archive.org/details/PhysicsElementaryMechanics", "Publisher": " Control Data Publishing" },
    { "Book Name": "Physics and mechanics", "vol": "1", "class": "12", "Author": "N/A", "Subject": "Physics", "Download Link": "https://archive.org/details/physicsmechanics0000unse", "Publisher": "N/A" },
    { "Book Name": "Mechanics", "vol": "1", "class": "12", "Author": "N/A", "Subject": "Physics", "Download Link": "https://archive.org/details/visualscience0000unse", "Publisher": "N/A" },
    { "Book Name": "electrostatic Formulae", "vol": "1", "class": "11", "Author": "N/A", "Subject": "Physics", "Download Link": "https://drive.google.com/file/d/18llYQir8WoXminZg2fXExuN2aVytiGj-/view", "Publisher": "N/A" },
    { "Book Name": "Wave optics Formulae", "vol": "1", "class": "11", "Author": "N/A", "Subject": "Physics", "Download Link": "https://drive.google.com/file/d/16AUhy_GIDlCxbyo--dFky2KerE-bnH7z/view", "Publisher": "N/A" },
    { "Book Name": "Atomic Structure", "vol": "1", "class": "11", "Author": "N/A", "Subject": "Physics", "Download Link": "https://drive.google.com/file/d/1Nau3bxOtPYPU6ZSJlrEyE9WTs81iayar/view", "Publisher": "N/A" },
    { "Book Name": "Nuclear Physics and Radioactivity", "vol": "1", "class": "11", "Author": "N/A", "Subject": "Physics", "Download Link": "https://drive.google.com/file/d/10JwfPlmmYnWpReNrR5nd85AXWOHUFYef/view", "Publisher": "N/A" },
    { "Book Name": "Surface Tension theory", "vol": "1", "class": "11", "Author": "N/A", "Subject": "Physics", "Download Link": "https://drive.google.com/file/d/1MkIp3jwE56sn9Ltf1lXzpNKTMo5gBrPf/view", "Publisher": "N/A" },
    { "Book Name": "gravitation", "vol": "1", "class": "11", "Author": "N/A", "Subject": "Physics", "Download Link": "https://drive.google.com/file/d/1X9HxAnF59w_diInqvY8KrnKeUB_DXsMQ/view", "Publisher": "N/A" },
    { "Book Name": "Work Power Energy and collision", "vol": "1", "class": "11", "Author": "N/A", "Subject": "Physics", "Download Link": "https://drive.google.com/file/d/1BGaAAW26D1ho-RBe2_QhGNRj2eyR3Iwx/view", "Publisher": "N/A" },
    { "Book Name": "Ray Optics", "vol": "1", "class": "11", "Author": "N/A", "Subject": "Physics", "Download Link": "https://drive.google.com/file/d/112ZgONXXJryEY0ZwKBneY2lcP71RJDqD/view", "Publisher": "N/A" },
    { "Book Name": "Simple Hormonic Motion", "vol": "1", "class": "11", "Author": "N/A", "Subject": "Physics", "Download Link": "https://drive.google.com/file/d/1Nau3bxOtPYPU6ZSJlrEyE9WTs81iayar/view", "Publisher": "N/A" },
    { "Book Name": "Wave Optics", "vol": "1", "class": "11", "Author": "N/A", "Subject": "Physics", "Download Link": "https://drive.google.com/file/d/16AUhy_GIDlCxbyo--dFky2KerE-bnH7z/view", "Publisher": "N/A" },
    { "Book Name": "Disha + examplar", "vol": "1", "class": "11", "Author": "N/A", "Subject": "Physics", "Download Link": "https://drive.google.com/file/d/1YbIaDrl8y_WY7ggCbE47Pl678o-dV_l9/view?usp=drive_link", "Publisher": "N/A" },

    { "Book Name": "Iron Catalysis in Organic Chemistry", "vol": "1", "class": "11", "Author": "Bernd Plietker", "Subject": "Organic Chemistry", "Download Link": "https://tech.chemistrydocs.com/Books/Organic/iron-catalysis-in-organic-chemistry-by-bernd-plietker.pdf", "Publisher": "N/A" },
    { "Book Name": "Advanced Organic Chemistry", "vol": "1", "class": "11", "Author": "Carey, Francis A., Sundberg, Richard J.", "Subject": "Organic Chemistry", "Download Link": "https://tech.chemistrydocs.com/Books/Organic/Advanced-Organic-Chemistry-Francis-A-Carey.pdf", "Publisher": "N/A" },
    { "Book Name": "Organic Chemistry", "vol": "1", "class": "11", "Author": "I L Finar", "Subject": "Organic Chemistry", "Download Link": "https://tech.chemistrydocs.com/Books/Organic/Organic-Chemistry-Vol-1-by-I-L-Finar-Fourth-Edition.pdf", "Publisher": "N/A" },
    { "Book Name": "Organic Chemistry", "vol": "2", "class": "11", "Author": "I L Finar", "Subject": "Organic Chemistry", "Download Link": "https://tech.chemistrydocs.com/Books/Organic/Organic-Chemistry-Vol-2-by-I-L-Finar-Third-Edition.pdf", "Publisher": "N/A" },
    { "Book Name": "Basic Organic Chemistry for the Life Sciences", "vol": "1", "class": "11", "Author": "Hrvoj Vančik", "Subject": "Organic Chemistry", "Download Link": "https://tech.chemistrydocs.com/Books/Organic/Basic-Organic-Chemistry-for-the-Life-Sciences-by-Hrvoj-Van%C4%8Dik.pdf", "Publisher": "N/A" },
    { "Book Name": "Numerical Problems in Physical Chemistry", "vol": "1", "class": "12", "Author": "Dr Bahadur", "Subject": "Organic Chemistry", "Download Link": "https://tech.chemistrydocs.com/Books/Physical/Numerical-Problems-in-Physical-Chemistry-for-IIT-JEE-By-Dr.-P.-Bahadur.pdf", "Publisher": "N/A" },
    { "Book Name": "Text Book of Organic Chemistry", "vol": "1", "class": "12", "Author": "B. S. Bahl", "Subject": "Organic Chemistry", "Download Link": "https://tech.chemistrydocs.com/Books/Organic/Text-Book-of-Organic-Chemistry-By-B.-S.-Bahl.pdf", "Publisher": "N/A" },
    { "Book Name": "Organic Structures from Spectra", "vol": "1", "class": "12", "Author": "L. D. Field", "Subject": "Organic Chemistry", "Download Link": "https://tech.chemistrydocs.com/Books/Organic/Organic-Structures-from-Spectra-By-L.-D.-Field-4th-Edition.pdf", "Publisher": "N/A" },
    { "Book Name": "Organic Reactions and Their Mechanisms Third Edition", "vol": "1", "class": "12", "Author": "PS Kalsi", "Subject": "Organic Chemistry", "Download Link": "https://tech.chemistrydocs.com/Books/Organic/Organic-Reactions-and-their-Mechanisms-By-PS-Kalsi-Thrid-Edition.pdf", "Publisher": "N/A" },
    { "Book Name": "Student Study Guide and Solutions Manual to accompany Organic Chemistry 2nd Edition", "vol": "1", "class": "12", "Author": "David Klein", "Subject": "Organic Chemistry", "Download Link": "", "Publisher": "N/A" },
    { "Book Name": "Disha + Exampler practice solutions", "vol": "1", "class": "12", "Author": "N/A", "Subject": "Organic Chemistry", "Download Link": "https://drive.google.com/file/d/1NXWlat8zSSoyWI8YOoALrGQOHqyVCr2J/view", "Publisher": "N/A" },
    { "Book Name": "Physical Chemistry", "vol": "1", "class": "12", "Author": "R L Madan", "Subject": "Organic Chemistry", "Download Link": "https://drive.google.com/file/d/1YbIaDrl8y_WY7ggCbE47Pl678o-dV_l9/view?usp=sharing", "Publisher": "N/A" },
    { "Book Name": "Named Organic Reactions", "vol": "1", "class": "12", "Author": "N/A", "Subject": "Organic Chemistry", "Download Link": "https://tech.chemistrydocs.com/Books/Organic/Named-Organic-Reactions-By-Thomas-Lauer-2nd-Edition.pdf", "Publisher": "N/A" },
    { "Book Name": "Cangage Physical Chemistry", "vol": "1", "class": "12", "Author": "N/A", "Subject": "Organic Chemistry", "Download Link": "https://archive.org/details/C-private-3/Cengage%20Physical%20Chemistry-1/", "Publisher": "N/A" },
    { "Book Name": "Cangage Physical Chemistry", "vol": "2", "class": "12", "Author": "N/A", "Subject": "Organic Chemistry", "Download Link": "https://archive.org/details/C-private-3/Cengage%20Physical%20Chemistry-2/", "Publisher": "N/A" },
    { "Book Name": "Atkins Physical Chemistry 11 Edition", "vol": "1", "class": "12", "Author": "N/A", "Subject": "Organic Chemistry", "Download Link": "https://archive.org/details/atkins-physical-chemistry-11-e-2018-940p", "Publisher": "N/A" },
    { "Book Name": "Problems in Physical Chemistry for JEE 15th Edition", "vol": "1", "class": "12", "Author": "Narendra Awasthi ", "Subject": "Organic Chemistry", "Download Link": "https://mega.nz/file/Zzkx2QRQ#oFweBLnbED3B5b7xvv6p3mfkcHpdnnMF7f3U1iPpEkE", "Publisher": "N/A" },
    { "Book Name": "Solutions Manual to Accompany Organic Chemistry", "vol": "1", "class": "12", "Author": "Clayden", "Subject": "Organic Chemistry", "Download Link": "https://tech.chemistrydocs.com/Books/Organic/Solutions-Manual-to-Accompany-Organic-Chemistry-By-Clayden.pdf", "Publisher": "N/A" },
    { "Book Name": "NCERT BOOK class 11 ", "vol": "1", "class": "11", "Author": "N/A", "Subject": "Chemistry", "Download Link": "https://drive.google.com/file/d/1p02tDZ2jEJk9WQ4KxYB7TvgtM5KMgPBp/view?usp=drive_link", "Publisher": "N/A" },
    { "Book Name": "Salt Analysis ", "vol": "1", "class": "11", "Author": "N/A", "Subject": "Chemistry", "Download Link": "https://ncert.nic.in/pdf/publication/sciencelaboratorymanuals/classXII/chemistry/lelm107.pdf", "Publisher": "N/A" },

    { "Book Name": "Cengage Inorganic Chemistry", "vol": "1", "class": "12", "Author": "N/A", "Subject": "Inorganic Chemistry", "Download Link": "https://archive.org/details/C-private-3/Cengage%20Inorganic%20Chemistry-1/page/n157/mode/2up", "Publisher": "N/A" },
    { "Book Name": "Cengage Inorganic Chemistry", "vol": "2", "class": "12", "Author": "N/A", "Subject": "Inorganic Chemistry", "Download Link": "https://archive.org/details/C-private-3/Cengage%20Inorganic%20Chemistry-2/", "Publisher": "N/A" },
    { "Book Name": "", "vol": "1", "class": "12", "Author": "", "Subject": "Organic Chemistry", "Download Link": "", "Publisher": "N/A" },
    { "Book Name": "", "vol": "1", "class": "12", "Author": "", "Subject": "Organic Chemistry", "Download Link": "", "Publisher": "N/A" },
    { "Book Name": "Chemistry for JEE Main 2020-Arihant (2020) P1", "vol": "1", "class": "12", "Author": "", "Subject": "Organic Chemistry", "Download Link": "https://drive.google.com/file/d/1bcX4MXLj38ON6y14AcJxXyBm095Lss2S/view?usp=sharing", "Publisher": "N/A" },
    { "Book Name": "", "vol": "1", "class": "12", "Author": "N/A", "Subject": "Organic Chemistry", "Download Link": "https://drive.google.com/file/d/1W5hwMrRsXch4V-22trIw1B7i5PfK32lO/view?usp=sharing", "Publisher": "N/A" },
    { "Book Name": "Chemistry for JEE Main 2020-Arihant (2020)", "vol": "1", "class": "12", "Author": "N/A", "Subject": "Chemistry", "Download Link": "https://drive.google.com/file/d/1wJDdb58ZOYEfzRRc248f_u33YZtFs7mn/view?usp=sharing", "Publisher": "N/A" },
    { "Book Name": "Chemistry for JEE Main 2020-Arihant (2020) C1", "vol": "1", "class": "12", "Author": "N/A", "Subject": "Chemistry", "Download Link": "https://drive.google.com/file/d/1EoAlDtHWKbNc65BiTwcqcsWd8gucMBdN/view?usp=sharing", "Publisher": "N/A" },
    { "Book Name": "Disha Experts - Disha NCERT", "vol": "1", "class": "12", "Author": "", "Subject": "Organic Chemistry", "Download Link": "https://drive.google.com/file/d/1KkBwFKe6f23v9qmi93eVP6aCTXX-XsB9/view?usp=sharing", "Publisher": "N/A" },
    { "Book Name": "Disha Experts - 43 Years JEE ADVANCED (1978-2020)", "vol": "1", "class": "11", "Author": "", "Subject": "Organic Chemistry", "Download Link": "https://drive.google.com/file/d/14xHjNwNPNaq6q1hlMzxEYjwU9LdY6OO1/view?usp=sharing", "Publisher": "N/A" },
    { "Book Name": "NEET Chemistry TOPICWISE", "vol": "1", "class": "12", "Author": "", "Subject": "Organic Chemistry", "Download Link": "https://drive.google.com/file/d/12Vh09yDM8WgH0elEoe7uM7ZE9-89wKyB/view", "Publisher": "N/A" },

    { "Book Name": "Trueman Elementary Biology", "vol": "1", "class": "12", "Author": "N/A", "Subject": "Biology", "Download Link": "https://archive.org/details/Truemanone", "Publisher": "N/A" },
    { "Book Name": "Trueman Elementary Biology", "vol": "2", "class": "12", "Author": "N/A", "Subject": "Biology", "Download Link": "https://archive.org/details/Truemantwo/Trueman_2/", "Publisher": "N/A" },
    { "Book Name": "Trueman Specific Series Sample question", "vol": "1", "class": "12", "Author": "N/A", "Subject": "Biology", "Download Link": "https://drive.google.com/file/d/1qjH7dCfxA-u2WW-BmsLPgMBNs_kAlmGn/view", "Publisher": "N/A" },
    { "Book Name": "MTG Objective NCERT ay your FINGERTIPS biology", "vol": "1", "class": "12", "Author": "", "Subject": "Biology", "Download Link": "https://drive.google.com/file/d/1zOh_3ZJ5ytkZAMMX-7Ehd0DgmXqRopgW/view?usp=sharing", "Publisher": "N/A" },
    { "Book Name": "Biology Arhith handbook", "vol": "1", "class": "11 & 12", "Author": "N/A", "Subject": "Biology", "Download Link": "https://drive.google.com/file/d/1sX7fVHFah4R73aPg_fUZzBsfxpNNK5Su/view", "Publisher": "N/A" },
    { "Book Name": "NCERT Class 12 Biology Textbook", "vol": "1", "class": "12", "Author": "N/A", "Subject": "Biology", "Download Link": "https://drive.google.com/file/d/1KJkjd5qbohDYSZMbwvEetY7XVSHMhF76/view?usp=sharing", "Publisher": "N/A" },
    { "Book Name": "", "vol": "1", "class": "12", "Author": "", "Subject": "Organic Chemistry", "Download Link": "https://drive.google.com/file/d/1woPWAsakBh30eCA-Qmoji1bRNsJCtv1n/view?usp=sharing", "Publisher": "N/A" },

    { "Book Name": "Math by sajjan singh", "vol": "2", "class": "12", "Author": "Sajjan Singh", "Subject": "Mathematics", "Download Link": "https://drive.google.com/file/d/1Kh4Wlx3g-4PfnGn5BXe-ruWZqZBhNPjG/view", "Publisher": "N/A" },
    { "Book Name": "Sumithra Tricky Mathematics", "vol": "1", "class": "11", "Author": "Sumithra", "Subject": "Mathematics", "Download Link": "https://drive.google.com/file/d/1apfny8jLN8znSf395xAeVtzjiYd-Xa-v/view", "Publisher": "N/A" },
    { "Book Name": "NCERT BOOK class 11 ", "vol": "1", "class": "11", "Author": "N/A", "Subject": "Mathematics", "Download Link": "https://drive.google.com/file/d/1mcZYXZnxQEvp_xwIo-cmXvxA7WH4tnEo/view?usp=sharing", "Publisher": "N/A" },
    { "Book Name": "Mathematics for Class 11", "class": "11", "vol": "1", "Author": "R.D. Sharma", "Subject": "Mathematics", "Download Link": "https://archive.org/details/DMnV_mathematics-class-xi-r.-d.-sharma/page/n899/mode/2up", "Publisher": "Dhanpat Rai Publications" },
    { "Book Name": "Mathematics for Class 12", "class": "12", "vol": "1", "Author": "R.D. Sharma", "Subject": "Mathematics", "Download Link": "https://archive.org/details/isbn_9789383182961_1/page/n9/mode/2up", "Publisher": "Dhanpat Rai Publications" },
    { "Book Name": "Mathematics for Class 12", "class": "12", "vol": "2", "Author": "R.D. Sharma", "Subject": "Mathematics", "Download Link": "https://archive.org/details/CJNq_mathematics-class-xii-vol.-2-r.-d.-sharma/page/n297/mode/2up", "Publisher": "Dhanpat Rai Publications" },
    { "Book Name": "Objective Mathematics for class 12", "class": "12", "vol": "2", "Author": "R.D. Sharma", "Subject": "Mathematics", "Download Link": "https://drive.google.com/file/d/0B0d-UkWYmTPhVzI1WFcwTDFQT1E/view?resourcekey=0-1p5KKJJ3su8hju9I55bd2Q", "Publisher": "Dhanpat Rai Publications" },
    { "Book Name": "NCERT BOOK class 11 ", "vol": "1", "class": "11", "Author": "N/A", "Subject": "Mathematics", "Download Link": "https://drive.google.com/file/d/1mcZYXZnxQEvp_xwIo-cmXvxA7WH4tnEo/view?usp=sharing", "Publisher": "N/A" },
    { "Book Name": "Math by sajjan singh", "vol": "2", "class": "12", "Author": "Sajjan Singh", "Subject": "Mathematics", "Download Link": "https://drive.google.com/file/d/1Kh4Wlx3g-4PfnGn5BXe-ruWZqZBhNPjG/view", "Publisher": "N/A" },
    { "Book Name": "Sumithra Tricky Mathematics", "vol": "1", "class": "11", "Author": "Sumithra", "Subject": "Mathematics", "Download Link": "https://drive.google.com/file/d/1apfny8jLN8znSf395xAeVtzjiYd-Xa-v/view", "Publisher": "N/A" },
    { "Book Name": "Sets", "vol": "1", "class": "11", "Author": "N/A", "Subject": "Mathematics", "Download Link": "https://www.studiestoday.com/node/176258/viewfile.html", "Publisher": "N/A" },
    { "Book Name": "CBSE Class 11 Trigonometric Functions", "vol": "1", "class": "11", "Author": "N/A", "Subject": "Mathematics", "Download Link": "https://www.studiestoday.com/node/211919/viewfile.html", "Publisher": "N/A" },
    { "Book Name": "NCERT Class 11 Triogonomic Functions", "vol": "1", "class": "12", "Author": "N/A", "Subject": "Mathematics", "Download Link": "https://www.studiestoday.com/node/176272/viewfile.html", "Publisher": "N/A" },
    { "Book Name": "NCERT Class 11 Principle of mathematical Induction", "vol": "1", "class": "11", "Author": "N/A", "Subject": "Mathematics", "Download Link": "https://www.studiestoday.com/node/176248/viewfile.html", "Publisher": "N/A" },
    { "Book Name": "CBSE Complex Numbbers", "vol": "1", "class": "11", "Author": "N/A", "Subject": "Mathematics", "Download Link": "https://www.studiestoday.com/node/211915/viewfile.html", "Publisher": "N/A" },
    { "Book Name": "NCERT Complex Numbers and Quadratic Equations", "vol": "1", "class": "11", "Author": "N/A", "Subject": "Mathematics", "Download Link": "https://www.studiestoday.com/node/176229/viewfile.html", "Publisher": "N/A" },
    { "Book Name": "NCERT Linear Equations", "vol": "1", "class": "11", "Author": "N/A", "Subject": "Mathematics", "Download Link": "https://www.studiestoday.com/node/176240/viewfile.html", "Publisher": "N/A" },
    { "Book Name": "NCERT Permutations and combinations", "vol": "1", "class": "11", "Author": "N/A", "Subject": "Mathematics", "Download Link": "https://www.studiestoday.com/node/176246/viewfile.html", "Publisher": "N/A" },
    { "Book Name": "NCERT Binomial Theoram", "vol": "1", "class": "11", "Author": "N/A", "Subject": "Mathematics", "Download Link": "https://www.studiestoday.com/node/176226/viewfile.html", "Publisher": "N/A" },
    { "Book Name": "NCERT Sequence and series", "vol": "1", "class": "11", "Author": "N/A", "Subject": "Mathematics", "Download Link": "https://www.studiestoday.com/node/211917/viewfile.html", "Publisher": "N/A" },
    { "Book Name": "CBSE Straight Line", "vol": "1", "class": "11", "Author": "N/A", "Subject": "Mathematics", "Download Link": "https://www.studiestoday.com/node/211918/viewfile.html", "Publisher": "N/A" },
    { "Book Name": "CBSE Introduction to Three dimensional Geometry", "vol": "1", "class": "11", "Author": "N/A", "Subject": "Mathematics", "Download Link": "https://www.studiestoday.com/node/176236/viewfile.html", "Publisher": "N/A" },
    { "Book Name": "NCERT Statistics", "vol": "1", "class": "11", "Author": "N/A", "Subject": "Mathematics", "Download Link": "https://www.studiestoday.com/node/176260/viewfile.html", "Publisher": "N/A" },
    { "Book Name": "Plane Trigonometry Part I", "vol": "1", "class": "12", "Author": "Loney S L", "Subject": "Mathematics", "Download Link": "https://archive.org/details/in.ernet.dli.2015.86278", "Publisher": "N/A" },
    { "Book Name": "Higher Algebra Hall And Knigh HALL", "vol": "1", "class": "12", "Author": "N/A", "Subject": "Mathematics", "Download Link": "https://archive.org/details/higher-algebra-hall-and-knigh-hall", "Publisher": "N/A" },
    { "Book Name": "Higher Algebra", "vol": "1", "class": "12", "Author": "S R Knight", "Subject": "Mathematics", "Download Link": "https://archive.org/details/in.ernet.dli.2015.216580/page/n147/mode/2up", "Publisher": "N/A" },
    { "Book Name": "Solutions for examples in Higher Algebra", "vol": "1", "class": "12", "Author": "N/A", "Subject": "Mathematics", "Download Link": "https://arpitclasses.in/books-solutions/hall-knight-solutions/solutions-of-the-examples-in-higher-algebra/", "Publisher": "N/A" },
    { "Book Name": "Golden Rays", "vol": "1", "class": "11", "Author": "N/A", "Subject": "English", "Download Link": "https://rajeduboard.rajasthan.gov.in/books-2017/10/Golden%20Rays.pdf", "Publisher": "N/A" },
    { "Book Name": "100 Golden Rules", "vol": "1", "class": "12", "Author": "N/A", "Subject": "English", "Download Link": "https://wpassets.adda247.com/wp-content/uploads/multisite/sites/2/2022/12/17232359/English.pdf", "Publisher": "N/A" },
    { "Book Name": "Communicative English", "vol": "1", "class": "12", "Author": "", "Subject": "English", "Download Link": "https://samagra.kite.kerala.gov.in/files/samagra-resource/uploads/tbookscmq/Class_XI/CommunicativeEnglish/Communicativeenglishfinal.pdf", "Publisher": "N/A" },
    { "Book Name": "Disha + Examplar", "vol": "1", "class": "12", "Author": "N/A", "Subject": "Mathematics", "Download Link": "https://drive.google.com/file/d/1VJAtqeIuEQXdQsJYNSY8Xc7QPN6D1Twq/view", "Publisher": "N/A" },
    { "Book Name": "Horbill", "vol": "1", "class": "11", "Author": "N/A", "Subject": "English", "Download Link": "https://drive.google.com/file/d/1FLwQUmr6TJsTKkLAOEjMhACMOE6iRsDb/view", "Publisher": "N/A" },
    { "Book Name": "Business Studies Poonam Gandhi", "vol": "1", "class": "11", "Author": "Poonam Gandhi", "Subject": "Business Studies", "Download Link": "https://drive.google.com/file/d/1drdz15N5r4cB7WelL63j12EKbDQOgR9a/view", "Publisher": "N/A" },
    { "Book Name": "Disha Chemistry", "vol": "1", "class": "11", "Author": "Poonam Gandhi", "Subject": "Chemistry", "Download Link": "https://drive.google.com/file/d/1Z_-gw9W32SnDPRC5cXhImtPzYb2oYHL6/view", "Publisher": "N/A" }


];

const urlParams = new URLSearchParams(window.location.search);
const subjectQuery = urlParams.get('subject');
const bookQuery = urlParams.get('book');
const classQuery = urlParams.get('class');

// Filter books based on search parameters
const filteredBooks = books.filter(book => {
    return book.Subject.toLowerCase().includes(subjectQuery) &&
        (bookQuery === "" || book["Book Name"].toLowerCase().includes(bookQuery)) &&
        (classQuery === "" || classQuery === "11" || classQuery === "12");
});

// Display results
const resultDiv = document.getElementById("result");

if (filteredBooks.length > 0) {
    filteredBooks.forEach(book => {
        const bookInfo = `
            <div class="card">
                <p><strong>Book Name:</strong> ${book["Book Name"]}</p>
                <p><strong>Subject:</strong> ${book.Subject}</p>
                <p><strong>Author:</strong> ${book.Author}</p>
                <p><strong>Publisher:</strong> ${book.Publisher}</p>
                <p><strong>Download Link:</strong> <a href="${book["Download Link"]}" target="_blank">Download</a></p>
            </div>
            <hr />
        `;
        resultDiv.innerHTML += bookInfo;
    });
} else {
    resultDiv.innerHTML = "<p>No books found for the provided search criteria.</p>";
}