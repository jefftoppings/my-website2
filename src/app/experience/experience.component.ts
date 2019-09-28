import { Component, OnInit } from '@angular/core';

interface WorkExperience {
  title: string;
  company: string;
  summary: string;
  duties: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  jobs: WorkExperience[] = [
    {
      title: 'Software Developer',
      company: 'Vendasta Technologies',
      summary: 'As a software developer at Vendasta, my focus has been on full-stack web development using the following technologies:',
      duties: ['Angular', 'TypeScript', 'HTML', 'CSS', 'JavaScript', 'KnockoutJs', 'Python', 'GoLang',
        'Google Cloud Platform', 'Big Query', 'Git Version Control']
    },
    {
      title: 'Corrosion Engineer',
      company: 'CorrPro Canada',
      summary: '',
      duties: [
        'Consulting work in various industries regarding Corrosion Engineering and Cathodic Protection',
        'Assisted in the design, installation, and maintenance of Cathodic Protection Systems'
      ]
    },
    {
      title: 'Research Assistant, Engineer-in-Training',
      company: 'Novozymes BioAg Ltd.',
      summary: '',
      duties: [
        'Performed experiments to test various chemical treatments with different microbials on seeds',
        'Assisted in the development of laboratory automation'
      ]
    },
    {
      title: 'Metallurgy Summer Student',
      company: 'Cameco Corporation',
      summary: 'Working at a remote mine site in northern Saskatchewan, here are some accomplishments and duties:',
      duties: [
        'Operated a bench-scale Solvent Extraction Pilot Plant',
        'Completed the creation of a live trending program in PI Processbook using VBA',
        'Aided in the development of a Microsoft Access Database',
        'Assisted Metallurgists with Daily tasks'
      ]
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
