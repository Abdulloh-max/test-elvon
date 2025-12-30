// dark-mode-fixed.js - Исправленный Dark Mode
(function() {
    'use strict';

    // Создаем стили для темной темы
    const darkModeStyles = `
        /* Темная тема - более специфичные селекторы */
        html.dark-mode {
            background-color: #121212 !important;
        }
        
        html.dark-mode body {
            background-color: #121212 !important;
            color: #e0e0e0 !important;
        }
        
        html.dark-mode header {
            background: linear-gradient(135deg, #0d1452 0%, #151f6e 100%) !important;
        }
        
        html.dark-mode .container {
            background-color: transparent !important;
        }
        
        html.dark-mode .hero {
            background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80') !important;
            background-size: cover !important;
            background-position: center !important;
        }
        
        html.dark-mode .product-card {
            background-color: #1e1e1e !important;
            border: 1px solid #333 !important;
        }
        
        html.dark-mode .product-title {
            color: #ffffff !important;
        }
        
        html.dark-mode .product-info {
            background-color: #1e1e1e !important;
        }
        
        html.dark-mode .price-amount {
            color: #64b5f6 !important;
        }
        
        html.dark-mode .old-price {
            color: #888888 !important;
        }
        
        html.dark-mode .usd-toggle {
            color: #00bcd4 !important;
        }
        
        html.dark-mode .add-to-cart {
            background-color: #388e3c !important;
        }
        
        html.dark-mode .add-to-cart:hover {
            background-color: #2e7d32 !important;
        }
        
        html.dark-mode footer {
            background-color: #0a0a1a !important;
        }
        
        html.dark-mode .footer-section h3 {
            color: #00bcd4 !important;
        }
        
        html.dark-mode .footer-section ul li a {
            color: #b0b0b0 !important;
        }
        
        html.dark-mode .footer-section ul li a:hover {
            color: #00bcd4 !important;
        }
        
        html.dark-mode .copyright {
            color: #888888 !important;
            border-top-color: #333 !important;
        }
        
        /* Модальные окна */
        html.dark-mode .modal-content {
            background-color: #1e1e1e !important;
            color: #e0e0e0 !important;
        }
        
        html.dark-mode .modal-header {
            background: linear-gradient(135deg, #0d1452 0%, #151f6e 100%) !important;
        }
        
        html.dark-mode .form-group label {
            color: #e0e0e0 !important;
        }
        
        html.dark-mode .form-group input,
        html.dark-mode .form-group textarea {
            background-color: #2d2d2d !important;
            border-color: #444 !important;
            color: #ffffff !important;
        }
        
        html.dark-mode .order-summary {
            background-color: #2d2d2d !important;
            color: #e0e0e0 !important;
        }
        
        html.dark-mode .order-item {
            border-bottom-color: #444 !important;
        }
        
        html.dark-mode .admin-link {
            background-color: #ff9800 !important;
            color: #333333 !important;
        }
        
        /* Категории */
        html.dark-mode .category {
            background-color: #1e1e1e !important;
            border: 1px solid #333 !important;
        }
        
        html.dark-mode .category h3 {
            color: #ffffff !important;
        }
        
        html.dark-mode .category i {
            color: #64b5f6 !important;
        }
        
        /* Корзина */
        html.dark-mode .cart-item {
            border-bottom-color: #444 !important;
        }
        
        html.dark-mode .cart-item-title {
            color: #ffffff !important;
        }
        
        html.dark-mode .cart-item-price {
            color: #64b5f6 !important;
        }
        
        html.dark-mode .cart-total {
            color: #64b5f6 !important;
            border-top-color: #444 !important;
        }
        
        /* Кнопки */
        html.dark-mode .btn {
            background-color: #00bcd4 !important;
            color: #ffffff !important;
        }
        
        html.dark-mode .btn:hover {
            background-color: #0097a7 !important;
        }
        
        /* Уведомления */
        html.dark-mode .notification {
            background-color: #4caf50 !important;
            color: #ffffff !important;
        }
        
        /* Детали товара */
        html.dark-mode .product-detail-title {
            color: #ffffff !important;
        }
        
        html.dark-mode .product-detail-description {
            color: #b0b0b0 !important;
        }
        
        html.dark-mode .product-detail-price {
            color: #64b5f6 !important;
        }
        
        html.dark-mode .features h4 {
            color: #ffffff !important;
        }
        
        html.dark-mode .features ul {
            color: #b0b0b0 !important;
        }
        
        /* Секции */
        html.dark-mode .section-title {
            color: #64b5f6 !important;
        }
        
        /* Для пустых состояний */
        html.dark-mode .empty-cart {
            color: #888888 !important;
        }
        
        html.dark-mode .empty-cart i {
            color: #444 !important;
        }
    `;

    // Создаем кнопку переключения темы
    const createThemeToggle = () => {
        // Удаляем старые стили если есть
        const oldStyles = document.getElementById('dark-mode-styles');
        if (oldStyles) oldStyles.remove();
        
        // Создаем элемент для стилей
        const styleElement = document.createElement('style');
        styleElement.id = 'dark-mode-styles';
        styleElement.textContent = darkModeStyles;
        document.head.appendChild(styleElement);
        
        // Удаляем старую кнопку если есть
        const oldButton = document.getElementById('darkModeToggle');
        if (oldButton) oldButton.remove();
        
        // Создаем кнопку переключения темы
        const toggleButton = document.createElement('button');
        toggleButton.id = 'darkModeToggle';
        toggleButton.title = 'Переключить тему';
        toggleButton.setAttribute('aria-label', 'Переключить светлую/темную тему');
        
        // Добавляем иконку
        const icon = document.createElement('i');
        icon.className = 'fas fa-moon';
        
        // Стили для кнопки
        toggleButton.style.cssText = `
            position: fixed;
            bottom: 80px;
            right: 20px;
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            font-size: 20px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        `;
        
        toggleButton.appendChild(icon);
        
        // Анимация при наведении
        toggleButton.onmouseenter = () => {
            toggleButton.style.transform = 'translateY(-5px) scale(1.1)';
            toggleButton.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.4)';
        };
        
        toggleButton.onmouseleave = () => {
            toggleButton.style.transform = 'translateY(0) scale(1)';
            toggleButton.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
        };
        
        // Добавляем кнопку на страницу
        document.body.appendChild(toggleButton);
        
        return toggleButton;
    };

    // Функция переключения темы
    const toggleDarkMode = () => {
        const html = document.documentElement;
        const isDarkMode = html.classList.contains('dark-mode');
        
        if (isDarkMode) {
            // Переключаем на светлую тему
            html.classList.remove('dark-mode');
            localStorage.setItem('elvon-theme', 'light');
            updateToggleButton(false);
        } else {
            // Переключаем на темную тему
            html.classList.add('dark-mode');
            localStorage.setItem('elvon-theme', 'dark');
            updateToggleButton(true);
        }
        
        console.log('Тема переключена:', isDarkMode ? 'светлая' : 'темная');
    };

    // Обновление иконки кнопки
    const updateToggleButton = (isDarkMode) => {
        const toggleButton = document.getElementById('darkModeToggle');
        if (!toggleButton) return;
        
        const icon = toggleButton.querySelector('i');
        if (isDarkMode) {
            // Темная тема активна - показываем солнце
            icon.className = 'fas fa-sun';
            toggleButton.title = 'Включить светлую тему';
        } else {
            // Светлая тема активна - показываем луну
            icon.className = 'fas fa-moon';
            toggleButton.title = 'Включить темную тему';
        }
    };

    // Инициализация темы
    const initTheme = () => {
        console.log('Инициализация темы...');
        
        // Проверяем сохраненную тему
        const savedTheme = localStorage.getItem('elvon-theme');
        console.log('Сохраненная тема:', savedTheme);
        
        // Проверяем системные настройки
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        console.log('Системная тема:', prefersDark ? 'темная' : 'светлая');
        
        // Создаем кнопку
        const toggleButton = createThemeToggle();
        
        // Определяем начальную тему
        let shouldUseDarkTheme = false;
        
        if (savedTheme === 'dark') {
            shouldUseDarkTheme = true;
            console.log('Используем сохраненную темную тему');
        } else if (savedTheme === 'light') {
            shouldUseDarkTheme = false;
            console.log('Используем сохраненную светлую тему');
        } else if (prefersDark) {
            // Если нет сохраненной темы, используем системную
            shouldUseDarkTheme = true;
            console.log('Используем системную темную тему');
        }
        
        // Устанавливаем начальную тему
        if (shouldUseDarkTheme) {
            document.documentElement.classList.add('dark-mode');
            updateToggleButton(true);
            console.log('Темная тема установлена');
        } else {
            document.documentElement.classList.remove('dark-mode');
            updateToggleButton(false);
            console.log('Светлая тема установлена');
        }
        
        // Добавляем обработчик клика
        toggleButton.addEventListener('click', toggleDarkMode);
        
        // Слушаем изменения системной темы (только если пользователь не выбрал тему)
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            const savedTheme = localStorage.getItem('elvon-theme');
            if (!savedTheme) {
                console.log('Системная тема изменилась:', e.matches ? 'темная' : 'светлая');
                if (e.matches) {
                    document.documentElement.classList.add('dark-mode');
                    updateToggleButton(true);
                } else {
                    document.documentElement.classList.remove('dark-mode');
                    updateToggleButton(false);
                }
            }
        });
        
        console.log('Тема инициализирована');
    };

    // Функция для принудительного включения темной темы (для тестирования)
    const forceDarkMode = () => {
        document.documentElement.classList.add('dark-mode');
        localStorage.setItem('elvon-theme', 'dark');
        updateToggleButton(true);
        console.log('Темная тема принудительно включена');
    };

    // Функция для принудительного включения светлой темы
    const forceLightMode = () => {
        document.documentElement.classList.remove('dark-mode');
        localStorage.setItem('elvon-theme', 'light');
        updateToggleButton(false);
        console.log('Светлая тема принудительно включена');
    };

    // Ждем загрузки DOM и Font Awesome
    const waitForFontAwesome = () => {
        const checkInterval = setInterval(() => {
            if (window.FontAwesome && window.FontAwesome.config) {
                clearInterval(checkInterval);
                initTheme();
            } else if (document.querySelector('i.fas')) {
                clearInterval(checkInterval);
                initTheme();
            }
        }, 100);
        
        // Максимальное время ожидания 5 секунд
        setTimeout(() => {
            clearInterval(checkInterval);
            initTheme();
        }, 5000);
    };

    // Запускаем когда DOM загружен
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', waitForFontAwesome);
    } else {
        waitForFontAwesome();
    }

    // Экспортируем функции для использования в других скриптах
    window.darkMode = {
        toggle: toggleDarkMode,
        enable: () => {
            document.documentElement.classList.add('dark-mode');
            localStorage.setItem('elvon-theme', 'dark');
            updateToggleButton(true);
            console.log('Темная тема включена');
        },
        disable: () => {
            document.documentElement.classList.remove('dark-mode');
            localStorage.setItem('elvon-theme', 'light');
            updateToggleButton(false);
            console.log('Светлая тема включена');
        },
        isEnabled: () => document.documentElement.classList.contains('dark-mode'),
        forceDark: forceDarkMode,
        forceLight: forceLightMode,
        reset: () => {
            localStorage.removeItem('elvon-theme');
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (prefersDark) {
                document.documentElement.classList.add('dark-mode');
                updateToggleButton(true);
            } else {
                document.documentElement.classList.remove('dark-mode');
                updateToggleButton(false);
            }
            console.log('Настройки темы сброшены');
        }
    };

    // Добавляем отладочную информацию
    console.log('Dark Mode script loaded successfully');
    console.log('Available commands:');
    console.log('  darkMode.enable()   - включить темную тему');
    console.log('  darkMode.disable()  - включить светлую тему');
    console.log('  darkMode.toggle()   - переключить тему');
    console.log('  darkMode.isEnabled()- проверить состояние');
    console.log('  darkMode.reset()    - сбросить настройки');

})();