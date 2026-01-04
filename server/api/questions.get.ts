export default defineEventHandler(async (event) => {
	const questions = [
		{
			id: 'q1',
			text: 'Что означает акроним TLB в процессоре?',
			options: [
				'Temporary Logic Bus',
				'Thermally Limited Breakpoint',
				'Translation Lookaside Buffer',
				'Total L1/2 Bandwidth'
			]
		},
		{
			id: 'q2',
			text: 'Какой сигнал (обычно) выдаст доступ к непромапленной странице виртуальной памяти (unmapped memory page)?',
			options: ['SIGSEGV', 'SIGBUS', 'SIGINT', 'SIGTERM']
		},
		{
			id: 'q3',
			text: 'Что означает AVX-512 SIMD инструкция VMOVDQA64?',
			options: [
				'Virtual Machine Override Quad Word Aligned to 64 bytes [JVM ASM]',
				'VEX Move Double Quad Word Aligned to 64 bytes (ZMM only)',
				'Variable-length Move Double to Quad Word (4-8 bytes); Architecture - 64-bit',
				'Vector Move Double Quad Word Aligned, 64-bit (QWORD) masking'
			]
		},
		{
			id: 'q4',
			text: 'За что отвечают 6 и 2 бит в маске для AVX2 SIMD интринсики _mm256_permute2x128_si256?',
			options: [
				'Выбор YMM регистра, из которого берется lane для соответствующего lane-а результата',
				'Ничего',
				'Выбор lane-а, который берется из соответствующего YMM регистра для соответствующего lane-а результата',
				'Нуллификация (zeroing) соответствующего lane-а результата'
			]
		},
		{
			id: 'q5',
			text: 'Как можно заметить, код приведенный ниже перезагружает target перед каждой операцией даже с -O3 (выделено красным). Какое ключевое слово (keyword), атрибут (attribute) или расширение компилятора способно наиболее эффективно предотвратить эту де-оптимизацию?',
			image: 'images/strict-aliasing-fun.png',
			options: [
				'__restrict',
				'(naked)',
				'inline',
				'[[nodiscard]]'
			]
		},
		{
			id: 'q6',
			text: 'Какой тип регистров был добавлен с расширением SSE?',
			options: ['MMX', 'XMM', 'YMM', 'ZMM']
		},
		{
			id: 'q7',
			text: 'В связи с какой стратегией оптимизации C/C++ код ниже выводит 1?',
			image: 'images/why-1.png',
			options: [
				'Elimination',
				'Inlining',
				'Constant folding',
				'Strict aliasing'
			]
		},
		{
			id: 'q8',
			text: 'Какую проблему с оптимизацией кэша решает выравнивание (alignas) под std::hardware_destructive_interference_size по дизайну?',
			options: [
				'Cache misses',
				'True sharing',
				'False sharing',
				'Bad cache locality'
			]
		},
		{
			id: 'q9',
			text: 'В каком регистре окажется значение, возвращаемое функцией std::uint32_t foo(); на System V AMD64 ABI?',
			options: ['XMM0', 'RAX', 'RDI', 'R10']
		},
		{
			id: 'q10',
			text: 'Что произойдет в результате исполнения этого кода?',
			image: 'images/asm.png',
			options: [
				'Вызов nasm syscall-а, который xor-ит RAX на RAX в текущем контексте, делая значение RAX = 0',
				'Вызов setuid syscall-а, устанавливая EUID на 13 и игнорируя поданную строку',
				'Вызов fork syscall-а, который xor-ит RAX на RAX в новом процессе, никак не влияя на текущий',
				'Вызов write syscall-а на stdout, печатая "xor rax, rax" в консоль'
			]
		},
		{
			id: 'q11',
			text: 'Какая ISA - единственная адекватная для разработки и, почти объективно, лучшая?',
			options: ['RISC-V', 'ARM64/AARCH64', 'AMD64/x86-64/x64', 'PowerPC']
		}
	];

	for (let i = questions.length - 2; 0 < i; --i) {
		const j = Math.floor(Math.random() * (i + 1));
		[questions[i], questions[j]] = [questions[j]!, questions[i]!];
	}

	questions[2] = questions.at(-1)!;

	return questions.slice(0, 3);
});