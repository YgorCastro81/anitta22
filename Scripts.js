
        // Defina a data inicial exata (ano, mês, dia, hora, minuto, segundo)
        const startDate = new Date(2023, 9, 22, 14, 0, 0); // 22 de outubro de 2023 às 14:00:00

        function updateCounter() {
            const now = new Date();  // Data e hora atuais
            const timeDifference = now - startDate; // Diferença de tempo em milissegundos

            // Cálculos para anos, dias, horas, minutos, segundos
            let years = now.getFullYear() - startDate.getFullYear();
            const months = now.getMonth() - startDate.getMonth();
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            // Verifica se completou um ano completo, caso o mês ou dia não tenha completado ainda
            if (months < 0 || (months === 0 && now.getDate() < startDate.getDate())) {
                years--;  // Decrementa um ano se o mês atual for anterior ao mês da data inicial ou o dia atual for anterior ao dia da data inicial
            }

            // Reinicia a contagem de dias a cada ano completo
            const startOfYear = new Date(now.getFullYear(), startDate.getMonth(), startDate.getDate());
            const daysThisYear = Math.floor((now - startOfYear) / (1000 * 60 * 60 * 24));

            // Ajusta a palavra "ano" ou "anos" dependendo da quantidade de anos completos
            const yearLabelForZero = years <= 0 ? "ano" : (years === 1 ? "ano" : "anos");

            // Atualiza os elementos na página
            document.getElementById('years').textContent = years;
            document.getElementById('days').textContent = daysThisYear;
            document.getElementById('hours').textContent = hours;
            document.getElementById('minutes').textContent = minutes;
            document.getElementById('seconds').textContent = seconds;

            // Ajusta a palavra "ano" ou "anos" para o rótulo
            document.getElementById('year-label').textContent = yearLabelForZero;
            document.getElementById('days-label').textContent = "dias";
            document.getElementById('hours-label').textContent = "horas";
            document.getElementById('minutes-label').textContent = "minutos";
            document.getElementById('seconds-label').textContent = "segundos";
        }

        // Atualiza a cada segundo
        setInterval(updateCounter, 1000);
        updateCounter();  // Chama imediatamente para não esperar o primeiro intervalo

