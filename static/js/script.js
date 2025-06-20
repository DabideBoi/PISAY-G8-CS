document.addEventListener('DOMContentLoaded', function() {
    // Quiz questions organized by language and topic
    let quizData = {
        cpp: {},
        python: {},
        javascript: {},
        web: {},
        java: {}
    };
    
    // Load quiz data from JSON files
    async function loadQuizData() {
        try {
            // Define the languages and topics to load
            const languages = {
                cpp: ['basics', 'conditionals', 'loops', 'functions', 'arrays'],
                python: ['basics', 'data_structures', 'file_io', 'pandas', 'web_scraping'],
                javascript: ['basics', 'dom', 'async', 'frameworks', 'apis'],
                web: ['html', 'css', 'responsive', 'js_integration', 'web_apis'],
                java: ['basics', 'oop', 'collections', 'multithreading', 'javafx']
            };
            
            // Load each language's topics
            const promises = [];
            
            for (const [language, topics] of Object.entries(languages)) {
                for (const topic of topics) {
                    promises.push(
                        fetch(`/data/${language}/${topic}.json`)
                            .then(response => {
                                if (!response.ok) {
                                    console.warn(`Failed to load ${language}/${topic}.json - This module might not be available yet`);
                                    return null;
                                }
                                return response.json();
                            })
                            .then(data => {
                                if (data) {
                                    if (!quizData[language]) {
                                        quizData[language] = {};
                                    }
                                    quizData[language][topic] = data;
                                }
                            })
                            .catch(error => {
                                console.error(`Error loading ${language}/${topic}.json:`, error);
                            })
                    );
                }
            }
            
            // Wait for all data to be loaded
            await Promise.all(promises);
            console.log('Quiz data loaded successfully');
            
            // Initialize the quiz after data is loaded
            initializeQuiz();
        } catch (error) {
            console.error('Error loading quiz data:', error);
            alert('Failed to load quiz data. Please refresh the page and try again.');
        }
    }
    
    // Start loading the quiz data
    loadQuizData();
    
    // Initialize the quiz after data is loaded
    function initializeQuiz() {
        // DOM elements
        const homeScreen = document.getElementById('home-screen');
        const startScreen = document.getElementById('start-screen');
        const quizContainer = document.getElementById('quiz-container');
        const resultsScreen = document.getElementById('results-screen');
        
        const topicTitle = document.getElementById('topic-title');
        const topicDescription = document.getElementById('topic-description');
        const totalQuestionsElement = document.getElementById('total-questions');
        
        const topicBtns = document.querySelectorAll('.topic-btn');
        const startBtn = document.getElementById('start-btn');
        const backToHomeBtn = document.getElementById('back-to-home-btn');
        const homeBtn = document.getElementById('home-btn');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const reviewBtn = document.getElementById('review-btn');
        const restartBtn = document.getElementById('restart-btn');
        
        const questionElement = document.getElementById('question');
        const codeSnippetElement = document.getElementById('code-snippet');
        const optionsContainer = document.getElementById('options-container');
        const currentQuestionElement = document.getElementById('current-question');
        const scoreElement = document.getElementById('score');
        const finalScoreElement = document.getElementById('final-score');
        const feedbackContainer = document.getElementById('feedback-container');
        const feedbackMessage = document.getElementById('feedback-message');

        // Quiz state
        let currentLanguage = '';
        let currentTopic = '';
        let currentQuestionIndex = 0;
        let score = 0;
        let userAnswers = [];
        let reviewMode = false;

        // Language tab switching
        window.showLanguage = function(language) {
            // Hide all language modules
            document.querySelectorAll('.language-modules').forEach(el => {
                el.classList.add('hidden');
            });
            
            // Show the selected language's modules
            document.getElementById(`${language}-modules`).classList.remove('hidden');
            
            // Update active tab
            document.querySelectorAll('.tab').forEach(tab => {
                tab.classList.remove('tab-active');
            });
            document.querySelector(`.tab[onclick="showLanguage('${language}')"]`).classList.add('tab-active');
        };

        // Topic selection
        topicBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const language = btn.getAttribute('data-language');
                const topic = btn.getAttribute('data-topic');
                selectTopic(language, topic);
            });
        });
        
        // Navigation buttons
        backToHomeBtn.addEventListener('click', showHomeScreen);
        homeBtn.addEventListener('click', showHomeScreen);
        startBtn.addEventListener('click', startQuiz);
        prevBtn.addEventListener('click', showPreviousQuestion);
        nextBtn.addEventListener('click', showNextQuestion);
        reviewBtn.addEventListener('click', reviewQuiz);
        restartBtn.addEventListener('click', restartQuiz);

        // Select a topic
        function selectTopic(language, topic) {
            // Check if the quiz data is available
            if (!quizData[language] || !quizData[language][topic]) {
                alert(`The ${topic} module for ${language} is not available yet. Please check back later.`);
                return;
            }
            
            currentLanguage = language;
            currentTopic = topic;
            
            // Update topic title and description
            topicTitle.textContent = quizData[language][topic].title;
            topicDescription.textContent = quizData[language][topic].description;
            
            // Show start screen
            homeScreen.classList.add('hidden');
            startScreen.classList.remove('hidden');
        }
        
        // Show home screen
        function showHomeScreen() {
            homeScreen.classList.remove('hidden');
            startScreen.classList.add('hidden');
            quizContainer.classList.add('hidden');
            resultsScreen.classList.add('hidden');
        }

        // Start quiz
        function startQuiz() {
            startScreen.classList.add('hidden');
            quizContainer.classList.remove('hidden');
            resultsScreen.classList.add('hidden');
            
            currentQuestionIndex = 0;
            score = 0;
            userAnswers = Array(quizData[currentLanguage][currentTopic].questions.length).fill(null);
            reviewMode = false;
            
            // Update total questions
            totalQuestionsElement.textContent = quizData[currentLanguage][currentTopic].questions.length;
            
            showQuestion(currentQuestionIndex);
            updateScore();
        }

        // Show a specific question
        function showQuestion(index) {
            const question = quizData[currentLanguage][currentTopic].questions[index];
            
            // Update question number
            currentQuestionElement.textContent = index + 1;
            
            // Set question text
            questionElement.textContent = question.question;
            
            // Set code snippet
            codeSnippetElement.textContent = question.code;
            
            // Clear previous options
            optionsContainer.innerHTML = '';
            
            // Add options
            question.options.forEach((option, i) => {
                const button = document.createElement('button');
                button.classList.add('option', 'btn', 'btn-outline');
                button.setAttribute('data-index', i);
                button.textContent = option;
                
                // In review mode, show correct/incorrect
                if (reviewMode) {
                    if (i === question.correctIndex) {
                        button.classList.add('correct');
                    } else if (userAnswers[index] === i) {
                        button.classList.add('incorrect');
                    }
                } 
                // In normal mode, show selected
                else if (userAnswers[index] === i) {
                    button.classList.add('selected');
                }
                
                // Add click event in normal mode
                if (!reviewMode) {
                    button.addEventListener('click', () => selectOption(i));
                }
                
                optionsContainer.appendChild(button);
            });
            
            // Hide feedback
            feedbackContainer.classList.add('hidden');
            
            // Update navigation buttons
            updateNavigationButtons();
        }

        // Select an option
        function selectOption(optionIndex) {
            const question = quizData[currentLanguage][currentTopic].questions[currentQuestionIndex];
            
            // Save user's answer
            userAnswers[currentQuestionIndex] = optionIndex;
            
            // Show feedback
            feedbackContainer.classList.remove('hidden');
            feedbackContainer.classList.add('fade-in');
            
            if (optionIndex === question.correctIndex) {
                feedbackContainer.className = 'alert alert-success mb-4 fade-in';
                feedbackMessage.textContent = 'Correct! ' + question.explanation;
                
                // Update score if this is the first correct answer for this question
                if (userAnswers.filter((ans, i) => ans === quizData[currentLanguage][currentTopic].questions[i].correctIndex).length > score) {
                    score++;
                    updateScore();
                }
            } else {
                feedbackContainer.className = 'alert alert-error mb-4 fade-in';
                feedbackMessage.textContent = 'Incorrect. ' + question.explanation;
            }
            
            // Update options display
            const options = document.querySelectorAll('.option');
            options.forEach(option => {
                option.classList.remove('selected');
                if (parseInt(option.getAttribute('data-index')) === optionIndex) {
                    option.classList.add('selected');
                }
            });
            
            // Enable next button
            nextBtn.disabled = false;
        }

        // Show previous question
        function showPreviousQuestion() {
            if (currentQuestionIndex > 0) {
                currentQuestionIndex--;
                showQuestion(currentQuestionIndex);
            }
        }

        // Show next question
        function showNextQuestion() {
            if (currentQuestionIndex < quizData[currentLanguage][currentTopic].questions.length - 1) {
                currentQuestionIndex++;
                showQuestion(currentQuestionIndex);
            } else {
                showResults();
            }
        }

        // Show results screen
        function showResults() {
            quizContainer.classList.add('hidden');
            resultsScreen.classList.remove('hidden');
            
            finalScoreElement.textContent = `${score}/${quizData[currentLanguage][currentTopic].questions.length}`;
        }

        // Review quiz
        function reviewQuiz() {
            resultsScreen.classList.add('hidden');
            quizContainer.classList.remove('hidden');
            
            reviewMode = true;
            currentQuestionIndex = 0;
            showQuestion(currentQuestionIndex);
        }

        // Restart quiz
        function restartQuiz() {
            startQuiz();
        }

        // Update score display
        function updateScore() {
            scoreElement.textContent = score;
        }

        // Update navigation buttons state
        function updateNavigationButtons() {
            prevBtn.disabled = currentQuestionIndex === 0;
            
            if (reviewMode) {
                nextBtn.disabled = currentQuestionIndex === quizData[currentLanguage][currentTopic].questions.length - 1;
            } else {
                nextBtn.disabled = userAnswers[currentQuestionIndex] === null;
            }
        }
    } // End of initializeQuiz function
});