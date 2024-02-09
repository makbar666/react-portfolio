import React, { useState } from 'react';
import Modal from './modal/Modal';
import CSIRTImage from '../assets/png/landingpagecsirt.png';
import CSRPusakaImage from '../assets/png/landingpagecsrpusaka.png';
import EOfficeImage from '../assets/png/landingpageeoffice.png';
import SimpegImage from '../assets/png/landingpagesimpeg.png';
import noImage from '../assets/svg/noImage.svg';

const projectsData = [
    // 
    // 
    {
        id: 1,
        image: noImage,
        title: 'Aplikasi Augmented Reality Alat Musik',
        description: 'Aplikasi Augmented reality alat musik dengan metode Marker Tracking yang di peruntukan untuk kebutuhan bahan mengajar guru di Sekolah Dasar di daerah Makassar, Aplikasi ini di development menggunakan bahasa C# dan menggunakan software Unity.',
        tecnologies: ['C#'],
        linkWeb: ''
    },
    {
        id: 1,
        image: noImage,
        title: 'Aplikasi Siakad v4',
        description: 'Aplikasi Siakad v4 ini di dedikasikan untuk mahasiswa dimana berfungsi untuk mengecek jadwal, nilai dan kebutuhan mahasiswa lainnya',
        tecnologies: ['Flutter'],
        linkWeb: ''
    },
    {
        id: 1,
        image: noImage,
        title: 'Company Profile Bank Maluku Malut',
        description: 'Website ini di bangun untuk sebagai company profile Bank Maluku Malut, selain itu website ini di permudah untuk di update kontennya melalui CMS.        ',
        tecnologies: ['Vue Js', 'Node.js', 'TailwindCSS', 'PostgreSQL'],
        linkWeb: 'https://bankmalukumalut.co.id/'
    },
    {
        id: 1,
        image: CSIRTImage,
        title: 'Web CSIRT Banksulselbar',
        description: 'Website CSIRT atau Computer Security Incident Response Team atau Tim Respons Insiden Keamanan Komputer. CSIRT adalah website untuk sebuah kelompok atau tim yang bertanggung jawab untuk menanggapi dan mengelola insiden keamanan komputer dalam suatu organisasi atau entitas.',
        tecnologies: ['Vue Js', 'Node.js', 'TailwindCSS', 'PostgreSQL'],
        linkWeb: 'https://csirt.banksulsebar.co.id/'
    },
    {
        id: 2,
        image: CSRPusakaImage,
        title: 'CSR Pusaka Banksulselbar',
        description: 'Website ini di bangun untuk Pengajuan Pinjaman user/nasabah. dimana disini pegawai bank yang bertugas untuk menginput data nasabah , kemudiakan akan di aprovall oleh atasannya ',
        tecnologies: ['Vue Js', 'Java Springboot', 'TailwindCSS', 'PostgreSQL'],
        linkWeb: 'https://csrdev.aistech.id/'
    },
    {
        id: 1,
        image: noImage,
        title: 'Sistem Perjalanan Dinas  LLDIKTI ( Perjadin )',
        description: 'Sistem perjalanan dinas merujuk pada rangkaian prosedur dan kebijakan yang diatur untuk mengelola dan memfasilitasi kebutuhan perjalanan yang berkaitan dengan tugas dinas atau pekerjaan',
        tecnologies: ['Angular Js', 'Express.js', 'TailwindCSS', 'PostgreSQL'],
        linkWeb: 'https://perjadin.lldikti9.go.id/'
    },
    {
        id: 3,
        image: EOfficeImage,
        title: 'E-Office Bapenda Barru',
        description: 'Sistem Persuratan ini di rancang untk mengelola persuratan yang ada di lingkup kantor tersebut , serta bisa juga keluar dari lingkup perusahaan/instansi',
        tecnologies: ['Vue Js', 'Node.js', 'TailwindCSS', 'PostgreSQL'],
        linkWeb: 'https://suratdev.aistech.id/'
    },
    {
        id: 4,
        image: SimpegImage,
        title: 'Simpeg RSUD Barru',
        description: 'Sistem kepegawaian ini dirancang untuk memudahkan administrasi dan pengelolaan sumber daya manusia (SDM), termasuk informasi tentang karyawan, Absensi,  proses rekrutmen, pelatihan, penggajian, evaluasi kinerja, serta pengembangan karir',
        tecnologies: ['Vue Js', 'Go Lang', 'TailwindCSS', 'PostgreSQL'],
        linkWeb: 'https://simpegdev.aistech.id/'
    },
    {
        id: 1,
        image: noImage,
        title: 'Aplikasi Mobile App Quis Srisuntari',
        description: 'Membangun Aplikasi Mobile Quis Srisuntari untuk kebutuhan mengecek kesehatan Anak yang baru lahir, Aplikasi ini seperti layaknya Quis dimana user akan mengisi data anak, Kemudian akan menjawab semua soal yang sdh di kondisikan sesuai dengan umur yg di input. Dan output dari Aplikasi ini berupa Pdf yang berisi kondisi anak.',
        tecnologies: ['Flutter'],
        linkWeb: ''
    },
];

const Project = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
        setModalOpen(true);
        console.log('open modal');
    };

    const closeModal = () => {
        setModalOpen(false);
        console.log('close modal');
    };

    return (
        <div className='py-10 z-0 relative'>
            <h1 className='text-xl font-semibold'>GALERY PROJECT</h1>
            <div className="p-4 md:p-10 space-y-5 md:space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {projectsData.map((project) => (
                        <div key={project.id} className="transition duration-300 ease-in-out delay-75 hover:scale-110 ">
                            <div className="group space-y-1 grid content-center justify-items-center relative shadow-sm rounded-lg">
                                <img src={project.image} alt={project.title} className="h-[200px] rounded-lg" />
                                <div onClick={() => openModal(project)} className="hidden group-hover:flex items-center justify-center absolute inset-0 bg-black bg-opacity-30 text-white cursor-pointer rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <span className="text-justify text-base">{project.title}</span>
                        </div>
                    ))}
                </div>
            </div>
            {isModalOpen && selectedProject && (
                <Modal isOpen={isModalOpen} closeModal={closeModal} title={selectedProject.title}>
                    <div className='space-y-3 pb-3'>
                        <p className="text-justify">{selectedProject.description}</p>
                        <p className="text-justify">Tecnologies: {selectedProject.tecnologies.join(', ')}</p>
                        <div className='pt-3'>
                            {selectedProject.linkWeb ? (
                                <a
                                    className='border p-3 rounded-md hover:bg-primary hover:text-gray-600 transition duration-300 ease-in-out delay-75'
                                    href={selectedProject.linkWeb}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Visit Project
                                </a>
                            ) : (
                                <p className="text-gray-600">Project in Local</p>
                            )}
                        </div>

                    </div>
                </Modal>
            )}
        </div>
    );
};

export default Project;
