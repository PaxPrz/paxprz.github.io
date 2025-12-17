document.addEventListener('DOMContentLoaded', () => {
    const codeLayer = document.querySelector('.code-layer');
    const loadingPercentage = document.getElementById('loading-percentage');
    const progressBar = document.getElementById('progress-bar');
    const systemLog = document.getElementById('system-log');
    
    // Configuration
    const TOTAL_DURATION = 15000; // 15 seconds (Visual timer only)
    const TARGET_URL = "https://paxprzdb-paxprajapati-07bdaf52.koyeb.app/"; 

    // REDIRECT IMMEDIATELY - Animation plays while target page loads
    window.location.href = TARGET_URL;

    // Code Snippets for "Coding Animation"
    const codeSnippets = [
        '<span class="code-keyword">import</span> { <span class="code-function">Kernel</span>, <span class="code-function">Memory</span> } <span class="code-keyword">from</span> <span class="code-string">"@sys/core"</span>;',
        '<span class="code-keyword">class</span> <span class="code-function">SystemBoot</span> <span class="code-keyword">extends</span> <span class="code-function">Process</span> {',
        '    <span class="code-keyword">constructor</span>() {',
        '        <span class="code-keyword">super</span>(<span class="code-string">"INIT_D"</span>);',
        '        <span class="code-keyword">this</span>.priority = <span class="code-string">"CRITICAL"</span>;',
        '    }',
        '    <span class="code-keyword">async</span> <span class="code-function">initialize</span>() {',
        '        <span class="code-comment">// Mounting filesystem</span>',
        '        <span class="code-keyword">await</span> <span class="code-function">mount</span>(<span class="code-string">"/dev/root"</span>);',
        '        <span class="code-comment">// Checking memory banks</span>',
        '        <span class="code-keyword">const</span> mem = <span class="code-keyword">new</span> <span class="code-function">MemoryAllocator</span>(0xFF);',
        '        <span class="code-keyword">if</span> (!mem.<span class="code-function">check</span>()) <span class="code-keyword">throw</span> <span class="code-keyword">new</span> <span class="code-function">Error</span>(<span class="code-string">"MEM_FAIL"</span>);',
        '        <span class="code-keyword">return</span> <span class="code-function">true</span>;',
        '    }',
        '    <span class="code-function">loadDrivers</span>() {',
        '        <span class="code-function">load</span>(<span class="code-string">"nvidia_gpu"</span>);',
        '        <span class="code-function">load</span>(<span class="code-string">"network_stack"</span>);',
        '        <span class="code-function">optimize</span>(<span class="code-string">"--level=3"</span>);',
        '    }',
        '}',
        '<span class="code-comment">// Initializing core subsystems...</span>',
        '<span class="code-keyword">const</span> sys = <span class="code-keyword">new</span> <span class="code-function">SystemBoot</span>();',
        'sys.<span class="code-function">initialize</span>().<span class="code-function">then</span>(() => {',
        '    console.<span class="code-function">log</span>(<span class="code-string">"System Ready"</span>);',
        '});'
    ];

    const logMessages = [
        "Om Mitraya Namaha",
        "Om Ravaye Namaha",
        "Om Suryaya Namaha",
        "Om Bhanave Namaha",
        "Om Khagaya Namaha",
        "Om Pushne Namaha",
        "Om Hiranya Garbhaya Namaha",
        "Om Marichaye Namaha",
        "Om Adityaya Namaha",
        "Om Savitre Namaha",
        "Om Arkaya Namaha",
        "Om Bhaskaraya Namaha",
        "Adi Deva Namasthubhyam Praseeda Mama Bhaskara",
        "Divakara Namasthubhyam Prabha Kara Namosthuthey",
        "CONNECTING TO COSMIC ENERGY...",
    ];

    let startTime = null;
    let logIndex = 0;
    
    // Code Typing Logic
    let currentLine = 0;
    const MAX_VISIBLE_LINES = 14;
    let lastTypeTime = 0;
    const TYPE_INTERVAL = 150; // ms between lines

    function update(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / TOTAL_DURATION, 1);
        
        // Update Percentage & Bar
        const percent = Math.floor(progress * 100);
        loadingPercentage.textContent = percent + '%';
        progressBar.style.width = percent + '%';

        // 3D Coding Animation Update
        if (timestamp - lastTypeTime > TYPE_INTERVAL) {
             typeCode();
             lastTypeTime = timestamp;
        }

        // Update Logs based on progress chunks
        if (Math.random() > 0.3) { 
            const targetLogIndex = Math.floor(progress * logMessages.length);
            if (logIndex < targetLogIndex && logIndex < logMessages.length) {
                 addLog(logMessages[logIndex]);
                 logIndex++;
            }
        }

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            // Animation complete - just flush remaining logs
            while (logIndex < logMessages.length) {
                addLog(logMessages[logIndex], true);
                logIndex++;
            }
            // Page will redirect whenever target server responds
        }
    }

    function typeCode() {
        // Since we have HTML in snippets (spans), we need to be careful.
        // Simple approach: Reveal snippets line by line for smoother "block" coding,
        // or just append full lines quickly.
        
        // Let's implement a "typing" effect where we append lines rapidly
        // If we want character by character it's harder with innerHTML spans.
        // So we will simulate "fast coding" by adding chunks of code.
        
        // Let's control rate by timestamp in main loop, here we just add the next line if ready
        
        // To make it "smooth 3D animation", the container is rotating (CSS).
        // The text content needs to update.
        
        // Check if we can add a new line
        // We'll map progress to lines roughly, or just loop through them?
        // Let's loop through them.
        
        if (currentLine < codeSnippets.length) {
            const line = document.createElement('div');
            line.innerHTML = codeSnippets[currentLine];
            line.style.opacity = '0';
            line.style.transform = 'translateX(20px)';
            line.style.transition = 'all 0.2s ease-out';
            
            codeLayer.appendChild(line);
            
            // Trigger animation next frame
            requestAnimationFrame(() => {
                line.style.opacity = '1';
                line.style.transform = 'translateX(0)';
            });

            // Scroll if needed
            if (codeLayer.children.length > MAX_VISIBLE_LINES) {
                codeLayer.removeChild(codeLayer.firstElementChild);
            }

            currentLine++;
        } else {
             // Reset to loop code? Or just stop?
             // Let's loop for infinite coding feel
             currentLine = 0;
             // Add a spacer
             const spacer = document.createElement('div');
             spacer.innerHTML = '<br>';
             codeLayer.appendChild(spacer);
        }
    }

    function addLog(msg, isSuccess = false) {
        const div = document.createElement('div');
        div.className = 'log-entry';
        
        const timestamp = new Date().toISOString().split('T')[1].split('.')[0];
        
        let colorClass = 'log-msg';
        if (msg.includes('COMPLETE') || isSuccess) {
            colorClass = 'log-success';
        } else if (msg.includes('Om') || msg.includes('Adi Deva') || msg.includes('Divakara')) {
            colorClass = 'log-success'; // Make mantras green/highlighted
        } else if (msg.includes('CONNECTING')) {
            colorClass = 'log-warn';
        }

        div.innerHTML = `<span class="log-prefix">[${timestamp}]</span> <span class="${colorClass}">${msg}</span>`;
        systemLog.appendChild(div);
        systemLog.scrollTop = systemLog.scrollHeight;
    }

    // Start
    requestAnimationFrame(update);
});
