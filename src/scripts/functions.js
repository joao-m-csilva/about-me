const aboutMe = {
	pt: `
		<h2>Olá! Me chamo João Marcos, tenho 26 anos e sou de Sete Lagoas, MG / Brazil.</h2>
		<p>Como um profissional com sólida experiência em gestão de projetos elétricos e de automação, estou em uma transição de carreira para a área de desenvolvimento, onde atualmente curso Engenharia de Software na UNINTER.</p>
		<p>Minha trajetória profissional em empresas como a Tesla Eletricidade e a Multitécnica me proporcionou uma forte disciplina para gerenciar projetos complexos, desde a concepção e o orçamento até a entrega final, sempre assegurando a qualidade e a conformidade com normas técnicas rigorosas como NR10, NBR5410 e NBR5419.</p>
		<p>Acredito que essa capacidade de solucionar problemas e garantir a robustez de entregas técnicas é um diferencial valioso que trago para o ciclo de vida do desenvolvimento de software.</p>
		<p>Motivado por essa nova direção profissional, tenho me dedicado a construir uma base sólida em tecnologias de desenvolvimento. Possuo conhecimentos fundamentais em Python (com Django e Flask), C# (.NET) para o back-end, e em front-end com HTML, CSS e JavaScript (React.js). Além disso, minha fluência em inglês e a experiência anterior como interface técnica com equipes e clientes internacionais me permitem colaborar de forma eficaz em ambientes diversificados.</p>
		<p>Busco uma oportunidade onde eu possa integrar minha experiência prática em engenharia com meu novo foco em programação, contribuindo para criar soluções tecnológicas eficientes e de alta qualidade.</p>
	`,
	en: `
		<h2>Hello! My name is João Marcos, I'm 26 years old and I'm from Sete Lagoas, MG / Brazil.</h2>
		<p>As a professional with solid experience in managing electrical and automation projects, I am in a career transition to the development area, where I am currently studying Software Engineering at UNINTER.</p>
		<p>My professional trajectory in companies like Tesla Eletricidade and Multitécnica has provided me with a strong discipline to manage complex projects, from conception and budgeting to final delivery, always ensuring quality and compliance with rigorous technical standards such as NR10, NBR5410 and NBR5419.</p>
		<p>I believe that this ability to solve problems and ensure the robustness of technical deliveries is a valuable differential that I bring to the software development life cycle.</p>
		<p>Motivated by this new professional direction, I have dedicated myself to building a solid foundation in development technologies. I have fundamental knowledge in Python (with Django and Flask), C# (.NET) for the back-end, and in front-end with HTML, CSS and JavaScript (React.js). In addition, my fluency in English and previous experience as a technical interface with international teams and clients allow me to collaborate effectively in diverse environments.</p>
		<p>I am looking for an opportunity where I can integrate my practical experience in engineering with my new focus on programming, contributing to creating efficient and high-quality technological solutions.</p>
	`
};

const jobTitles = {
	pt: 'Engenheiro de Software',
	en: 'Software Engineer'
};

function changeLanguage(lang) {
	const aboutTextElement = document.getElementById('about-text');
	const jobTitleElement = document.getElementById('job-title');
    
	aboutTextElement.innerHTML = aboutMe[lang];
	jobTitleElement.innerText = jobTitles[lang];
}

// Set initial language
window.onload = () => {
	changeLanguage('pt');
};