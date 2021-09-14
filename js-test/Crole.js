
//let alphabeth = ["a","b","c","d","e","f","g"]

//for (let i=0; i<0 ; i += 1)
//{
//    console.log(alphabeth[i]);
//}

//option 1
//for(letter of alphabeth)
//{
//    console.log(letter);
//}

//option 2
//function logLetter(letter)
//{
//    console.log(letter)
//}
//alphabeth.forEach(logLetter)

//option 3 med arow funtion
//alphabeth.forEach(letter => console.log(letter));



   const sections = document.querySelectorAll(".fade-in");

    const options =
        {
            root: null,
            threshold: 0,
            rootMargin: "-350px"
        };



    const observer = new IntersectionObserver(function (entries,observer)
    {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            } else
            {
                console.log(entry.target);
                entries.target.classList.add("appear");
            }
        });

//        for(let i=0;i < entries.length; i +=1)
//        {
//            if (!entries[i].isIntersecting)
//            {
//                return;
//            } else
//            {
//                console.log(entries[i]);
//                entries[i].target.classList.add("appear");
//            }
//        }
}, options);

        sections.forEach(section => observer.observe(section))


    //for(let i=0;i < section.length; i +=1)
    //{
    //    observer.observe(section[i]);
    //}

