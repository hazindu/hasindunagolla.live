import React from 'react';

export default function AboutPage() {
    const education = [
        {
            institution: "Open University of Sri Lanka",
            degree: "Bachelor's degree, Computer Software Engineering",
            date: "2024 - Current",
            description: "Pursuing a BSc (Hons) in Software Engineering with strong academic performance in core concepts.",
            skills: "Software Engineering Practices, Data Structures and Algorithms, Web Development, Mobile Application Development, AI/ML, Cloud Computing, Automation"
        },
        {
            institution: "Department of Technical Education & Training - Sri Lanka",
            degree: "NVQ Level 04, Engineering Draughtsmanship",
            date: "2021 - 2022",
            description: "Hands-on experience in Engineering Drawing, CAD Design, Technical Drafting, and basic Civil Engineering practices",
            skills: "Mathematics, Civil Engineering Drafting, Engineering Drawings, Computer-Aided Design (CAD), AutoCAD, Revit"
        },
        {
            institution: "St. Thomas' College, Matale",
            degree: "GCE A/L, Technology",
            date: "2018 - 2020",
            description: "Completed GCE Advanced Level in the Technology stream with studies in Engineering Technology, Bio Systems Technology, and Information & Communication Technology (ICT)."
        }
    ];

    const certificates = [
        {
            name: "Neural Networks and Deep Learning",
            issuer: "Coursera",
            description: "Deep learning, neural networks, CNNs, RNNs, and supervised models",
            link: "#"
        },
        {
            name: "AWS Cloud Practitioner Essentials",
            issuer: "Amazon Web Services",
            description: "AWS cloud fundamentals, EC2, S3, IAM, VPC, Lambda, RDS, cloud security, pricing, and core AWS architecture",
            link: "#"
        },
        {
            name: "Microsoft Certified: Azure Fundamentals",
            issuer: "Microsoft Learning",
            description: "Azure cloud concepts, core services, security, governance, pricing, and support",
            link: "#"
        },
        {
            name: "Python and Flask Framework",
            issuer: "Udemy",
            description: "Flask, REST APIs, database integration, and backend design",
            link: "#"
        },
        {
            name: "JavaScript: From First Steps",
            issuer: "Frontend Masters",
            description: "JavaScript (ES6+), asynchronous programming, DOM, and modern web development",
            link: "#"
        },
        {
            name: "NumPy Data Analysis",
            issuer: "Udemy",
            description: "NumPy, data preprocessing, statistical analysis, and numerical computing",
            link: "#"
        }
    ];

    return (
        <section className="pt-32 pb-24 px-6 bg-[#FAFBFF] min-h-screen">
            <div className="max-w-4xl mx-auto relative z-10">
                {/* Page introduction */}
                <div className="mb-16 animate-on-scroll is-visible">
                    <p className="text-brand-primary font-bold text-sm tracking-wider uppercase mb-2">More About Me</p>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-4">Background & Experience</h1>
                    <p className="text-gray-500 text-lg leading-relaxed max-w-2xl text-justify">
                        Building Intelligent, Scalable, and Reliable Software Solutions
                        As an Intern Software Engineer, I combine my skills in Full-Stack Development, AI/ML, and Cloud infrastructure to solve complex problems. From designing backend systems and analyzing data to ensuring software quality and deploying applications, I am passionate about creating production-ready, data-driven systems that deliver real value.
                    </p>
                </div>

                {/* Personal details */}
                <div className="mb-16 animate-on-scroll is-visible">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-brand-dark">Personal Details</h2>
                    </div>
                    <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 text-gray-400">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Remote Location</p>
                                    <p className="font-medium text-brand-dark text-lg">Matale, Sri Lanka</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="mt-1 text-gray-400">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Work Address</p>
                                    <p className="font-medium text-brand-dark text-lg">Colombo, Sri Lanka</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="mt-1 text-gray-400">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Email</p>
                                    <p className="font-medium text-brand-dark text-lg">hasindu.connect@proton.me</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="mt-1 text-gray-400">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Availability</p>
                                    <p className="font-medium text-brand-dark text-lg">Open to Opportunities</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Education */}
                <div className="mb-16 animate-on-scroll is-visible" style={{ animationDelay: '0.1s' }}>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-brand-dark">Education</h2>
                    </div>

                    <div className="space-y-6">
                        {education.map((edu, index) => (
                            <div key={index} className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row gap-6 hover:shadow-md transition-shadow">
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-brand-dark mb-1">{edu.institution}</h3>
                                    <p className="text-brand-primary font-medium text-sm mb-3">{edu.degree}</p>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{edu.description}</p>
                                    {edu.skills && (
                                        <p className="text-sm"><span className="font-semibold text-gray-700">Skills:</span> <span className="text-gray-500">{edu.skills}</span></p>
                                    )}
                                </div>
                                <div className="sm:text-right shrink-0">
                                    <span className="inline-block px-3 py-1 bg-gray-50 text-gray-500 rounded-lg text-sm font-semibold border border-gray-100">{edu.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Certificates */}
                <div className="mb-12 animate-on-scroll is-visible" style={{ animationDelay: '0.2s' }}>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-brand-dark">Licenses & Certifications</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {certificates.map((cert, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
                            >
                                <p className="text-xs font-bold text-brand-primary uppercase tracking-wider mb-2">{cert.issuer}</p>
                                <h4 className="font-bold text-brand-dark text-lg mb-3 leading-snug">{cert.name}</h4>
                                <p className="text-sm text-gray-500 leading-relaxed mt-auto">{cert.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
