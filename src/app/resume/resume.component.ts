import {Component} from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  title: string = "Osnir Cunha";
  role: string = "Senior Java Developer";

  professionalExperiences: Array<any> = [
    {
      "company": "Inter & CO",
      "period": "since 2021",
      "position": "Senior Java Engineer Specialist",
      "activities": [
        "Working as Senior Developer Specialist on the first Brazilian digital bank.",
        "Responsible for design, develop and lead an itegrated payment solution for the super app using Java 11, AWS, Git/Gitlab, Kafka, Spring/Springboot and Micronaut."
      ],
      "keys": [
        "Java", "Spring", "Micronaut", "JPA", "Hibernate", "Microservices", "AWS", "Maven"
      ]
    },
    {
      "company": "Wipro Technologies",
      "period": "2014-2021",
      "position": "Senior Java Engineer",
      "activities": [
        "Working as tech lead on a team of 10 developers being responsible for mentor team members and scale up their technical knowledge on microservices and Pivotal Cloud Foundry.",
        "Part of a distributed team with members at Brazil, Ireland and USA"
      ],
      "keys": [
        "Java", "Spring", "Springboot", "JPA", "Hibernate", "Microservices", "Batch processing", "Gradle"
      ]
    },
    {
      "company": "CITS",
      "period": "2013-2014",
      "position": "Software Developer",
      "activities": [
        "Android developer for applications such as Guia Época SP, World Cup Live Wallpaper and several PoCs for Samsung",
        "Java develper creating Eclipse plugins PoCs for Samsung and working on a web project - IIMS Inteligent Infraestructure Management Service - using Java J2EE frameworks such as JSF, Primefaces, ActiveMQ, Hibernate, Maven for Furukawa."
      ],
      "keys": [
        "Java", "Spring", "JSF", "JPA", "Hibernate", "Android", "PoC", "Maven"
      ]
    },
    {
      "company": "HSBC Global Technology Brazil",
      "period": "2010-2013",
      "position": "Software Analyst",
      "activities": [
        "Java developer working on backend service for calculate derivatives and account opening using frameworks such as using Spring(Core, Batch, Integration and JDBC), Maven, Struts, Hibernate"
      ],
      "keys": [
        "Java", "Spring", "Spring Batch", "JSP", "JPA", "Hibernate", "Struts", "Batch processing"
      ]
    }
  ]
  mainInfo: any = {
    title: "Main Information",
    items: [
      "Bachelor degree in Information Systems",
      "Working as a Software Engineer since 2009",
      "Pivotal Cloud Foundry - Cloud Native Architect",
      "Microsoft Azure Certified - Azure Fundamentals",
      "Experience with AWS and certified with Architecting on AWS",
      "Microservices and Cloud Native applications",
      "Software development experience using Java",
      "Solid knowledge with frameworks such as Spring(Core, Web, Batch, Integration, JPA, JDBC, Security, Boot and Cloud), Micronaut, Maven, Flyway, Junit, Pitest, Gradle and Hibernate",
      "Experience with Agile methodologies",
      "Version control experience with Svn and Git",
      "Experienced with Linux/Unix environments, shell script, groovy and python",
      "CI/CD using Jenkins, Bamboo and Gitlab pipelines"
    ]
  };

  complementarInfos: any = [{
    title: "Languages",
    items: [
      "Portuguese — Native Language",
      "English — Fluent"
    ]
  },
    {
      title: "International Experience",
      items: [
        "2017/2018. Visits to Mastercard's office in St Louis/MO in Sept/2017 and Sept-Oct/2018 to attend strategic meetings for the project and to exchange knowledge.",
        "2018. Course on software modernization (PAL - Platform Acceleration Lab) lasting 3 weeks at Pivotal's facilities in Boulder/CO."
      ]
    }];
}
