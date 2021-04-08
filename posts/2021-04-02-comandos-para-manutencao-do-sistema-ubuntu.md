---
date: 2021-04-02 05:54:23
title: Comandos para Manutenção do Sistema (Ubuntu)
description: Estes são alguns comandos importantes para a manutenção do sistema, especialmente para novos usuários.
category: dev
background: "#61728f"
---

Estes são alguns comandos importantes para a manutenção do sistema, especialmente para novos usuários.

- **Atualizar a lista de pacotes**

```bash
sudo apt-get update
```

- **Atualizar toda a distro**

```bash
sudo apt-get -f dist-upgrade
```

- **Instalar pacotes**

```bash
sudo apt-get install [nome-do-pacote]
```

- **Procurar arquivos corrompidos**

```bash
sudo apt-get check
```

- **Corrigir problemas de dependências, concluir instalação de pacotes pendentes e outros erros**

```bash
sudo apt-get -f install

# Se o comando acima não resolver, use:

sudo dpkg -i --force-all

# Para forçar a instalação
```

- **Solucionar problemas causados por interrupção na instalação, e pendências na configuração do pacote**

```bash
sudo dpkg --configure -a
```

- **Remover arquivos inúteis do cache**

```bash
sudo apt-get clean
```

- **Remover pacotes antigos ou duplicados**

```bash
sudo apt-get autoclean
```

- **Remover pacotes com problemas**

```bash
sudo apt-get -f remove
```

- **Remover pacotes instalados**

```bash
sudo apt-get remove [nome-do-pacote]
```