document.addEventListener('DOMContentLoaded', function () {
  const commandInput = document.getElementById('commandInput');
  const terminalBody = document.querySelector('.terminal-body');

  commandInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      const input = this.value.trim().toLowerCase(); // Komutları küçük harfe çevirip gereksiz boşlukları kaldırır
      const commandLine = document.createElement('div');
      commandLine.classList.add('command-line');
      commandLine.innerHTML = `<p class="has-text-weight-bold">~ ❯ ${input}</p>`;
      terminalBody.appendChild(commandLine);
      this.value = '';

      // Basit komut işleyici
      let response;
      let responseClass = ''; // Komut yanıtına özel sınıf
      switch (input) {
        case 'hello':
          response = 'Merhaba! Nasılsın?';
          responseClass = 'response-hello';
          break;
        case 'commands':
          response =
            'Available commands: hello, commands, echo, kill, clear, facts, ls, cat, git, ssh, hacker, info, contact';
          responseClass = 'response-commands';
          break;
        case 'echo':
          response = 'Echo... Echo... Echo...';
          responseClass = 'response-echo';
          break;
        case 'kill':
          const iframe = document.createElement('iframe');
          iframe.src = 'https://giphy.com/embed/4Hff6Un3aBXWM';
          iframe.width = '480';
          iframe.height = '269';
          iframe.style.border = 'none';
          iframe.style.float = 'left';
          iframe.style.marginRight = '10px';
          terminalBody.appendChild(iframe);
          response = 'Process terminated... (Not really)';
          responseClass = 'response-kill';
          break;
        case 'clear':
          const initialMessage = `
           <pre class="terminal-info">

<span class="const">Welcome To Terminal</span> 

        <span class="const">const <span class="coder">coder</span></span> = {
        <span class="field">name:<span class="value">'Ömer Faruk KUMRAL'</span> </span>,
        <span class="field">location: <span class="value">'Trabzon/Türkiye'</span></span>,
        <span class="field">hardWorker:<span class="value">true</span> </span>,
        <span class="field">quickLearner: <span class="value">true</span></span>,
        <span class="field">problemSolver: <span class="value">true</span></span>,
        <span class="field">skills: <span class="value">['.Net','C#','OOP','React-Native','Swift','SQL']</span>};</span>
              </pre>
              <p class="text-info">Type "commands" into the terminal window and hit enter to see all commands</p>
            </div>
            <br>
            <div class="terminal-control">
              <div class="terminal-input-wrapper">
                <form class="terminal-input">
                  <div class="field">
                    <div class="control has-icons-left">
                      <span class="icon is-left">❯ <label class="label">~</label></span>
                      <input class="input" id="commandInput" name="" autocorrect="off" autocapitalize="none" autocomplete="off" autofocus="" placeholder="Enter Command">
                    </div>
                  </div>
                </form>
              </div>
            </div>
          `;
          terminalBody.innerHTML = initialMessage;
          return;
        case 'facts':
          response =
            'Did you know? The first computer virus was created in 1983.';
          responseClass = 'response-facts';
          break;
        case 'ls':
          response = 'List of directories: /home /about /projects /contact';
          responseClass = 'response-ls';
          break;
        case 'cat':
          response = 'Cat says meow!';
          responseClass = 'response-cat';
          break;
        case 'git':
          response =
            'Cloning repository... (Just kidding, but you can visit github.com/thekumral)';
          responseClass = 'response-git';
          break;
        case 'ssh':
          response = 'Connecting to the server... (Connection failed)';
          responseClass = 'response-ssh';
          break;
        case 'hacker':
          response = 'Hacking into the mainframe... (Access Denied)';
          responseClass = 'response-hacker';
          break;
        case 'info':
          response =
            'Web Developer | App Developer | TypeScript Expert | Backend Specialist';
          responseClass = 'response-info';
          break;
        case '44':
          response = '<3 Malatya <3';
          responseClass = 'response-44';
          break;
        case 'contact':
          response =
            'Email: contact@thekumral.com | GitHub: github.com/thekumral';
          responseClass = 'response-contact';
          break;
        default:
          response = `Command not found: ${input}. Type 'commands' to see the available commands.`;
          responseClass = 'response-error'; // Hata yanıtı için renk
          break;
      }

      if (response) {
        const responseElement = document.createElement('p');
        responseElement.classList.add('command-response', responseClass);
        responseElement.innerHTML = response; // .textContent yerine .innerHTML kullanarak HTML içeriği ekler
        terminalBody.appendChild(responseElement);
      }

      terminalBody.scrollTop = terminalBody.scrollHeight;
    }
  });
});
