$(document).ready(() => {
    let lang = 'en';

    $('#lang-toggle').click(() => {
        if(lang === 'en') { 
            lang='pt'; translatePT(); 
        } else { 
            lang='en'; translateEN(); 
        }
    });

    function translatePT(){
        $('.menu_home').text('Início');
        $('.menu_aboute_me').text('Sobre mim');
        $('.menu_my_project').text('Meus Projetos');
        $('.menu_contact_me').text('Entre em contato');
        $('#title_skills').text('Minhas Habilidades');
        $('#lang-toggle').attr('title', 'Clique para mudar o idioma');
        $('.about_paragraph').html(
            'Oi, meu nome é Wesley! Sou estudante de Engenharia de Software na <b>UNOPAR</b>.<br>' +
            'Minha principal linguagem de programação é <b>PHP</b>, e gosto de combiná-la com <b>jQuery</b> para criar sites dinâmicos.<br>' +
            'Também tenho experiência com <b>MySQL</b>, <b>CodeIgniter 4</b> e <b>Docker</b>.<br>' +
            'Atualmente, estou focado em melhorar minhas habilidades em <b>desenvolvimento web</b>.'
        );
        $('.header_subTitle').text('Desenvolvedor back-end');
        $('.about_title').text('Sobre mim');
        $('.projects_title').text('Meus Projetos - No GitHub');
        $('.contact_title').text('Contato');
        $('#name').attr('placeholder','Nome');
        $('#message').attr('placeholder','Digite sua mensagem');
        $('.button_form').val('Enviar WhatsApp');
        $('.info_project').eq(0).text('Projeto Via CEP');
        $('.paragraph_project').eq(0).text('Este projeto foi uma ótima oportunidade para aprender e praticar JavaScript.');
        $('.info_project').eq(1).text('Projeto To-Do List');
        $('.paragraph_project').eq(1).text('Um site simples para controlar tarefas diárias e organizar por status.');
        $('.info_project').eq(2).text('Projeto Integração Imobiliária');
        $('.paragraph_project').eq(2).text('Uma ferramenta para gerar uma URL única com todos os imóveis de um cliente.');
    }

    function translateEN(){
        $('.menu_home').text('Home');
        $('.menu_aboute_me').text('About me');
        $('.menu_my_project').text('My Projects');
        $('#lang-toggle').attr('title', 'Click to change language');
        $('.menu_contact_me').text('Contact me');
        $('#title_skills').text('My Skills');
        $('.about_paragraph').html(`
            Hi, my name is Wesley! I'm a Software Engineering student at <b>UNOPAR</b>.<br>
            My main programming language is <b>PHP</b>, and I enjoy combining it with <b>jQuery</b> to build dynamic websites.<br>
            I also have experience with <b>MySQL</b>, <b>CodeIgniter 4</b>, and <b>Docker</b>.<br>
            Currently, I'm focused on improving my skills in <b>web development</b>.
        `);
        $('.header_subTitle').text('Backend developer');
        $('.about_title').text('About Me');
        $('.projects_title').text('My Projects - On GitHub');
        $('.contact_title').text('Contact');
        $('#name').attr('placeholder','Name');
        $('#message').attr('placeholder','Type your message');
        $('.button_form').val('Send WhatsApp');
        $('.info_project').eq(0).text('Project Via CEP');
        $('.paragraph_project').eq(0).text('This project was a great opportunity to learn and practice JavaScript.');
        $('.info_project').eq(1).text('Project To-do List');
        $('.paragraph_project').eq(1).text('A simple To-Do website to manage daily tasks and organize them by status.');
        $('.info_project').eq(2).text('Real Estate Integration Project');
        $('.paragraph_project').eq(2).text('A tool for real estate agents to generate a single URL with all client properties.');
    }

    $('#form').submit((e) => {
        e.preventDefault();
        const name = $('#name').val();
        const message = $('#message').val();
        const phone = '5541987932887';
        const text = lang==='pt'? `Olá! Me chamo ${name}, ${message}` : `Hi! My name is ${name}, ${message}`;
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    });
});
