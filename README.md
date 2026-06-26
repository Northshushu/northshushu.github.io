# 马鑫凯 | Xinkai Ma 个人学术主页


<p align="center">
  <a href="https://xinkaima1.github.io"><strong>🌐 学术主页</strong></a> ·
  <a href="https://github.com/xinkaima1/xinkaima1.github.io"><strong>📂 仓库源码</strong></a> ·
  <a href="mailto:1914203268@qq.com"><strong>📧 联系邮箱</strong></a>
</p>

---

## 📋 项目概述

本学术主页基于开源项目 [al-folio](https://github.com/alshedivat/al-folio) Jekyll 学术模板二次定制开发，用于展示个人学业经历、竞赛项目与科研实践。

| 项目信息 | 详情 |
|---------|------|
| **作者** | 马鑫凯 (Xinkai Ma) |
| **院校** | 吉林大学 生物与农业工程学院 |
| **在读身份** | 本科生（2023-2026） |
| **研究方向** | 机器人系统、人工智能算法、自主导航与嵌入式控制 |
| **学术主页** | https://xinkaima1.github.io |
| **开源协议** | MIT License |

---

## 🛠️ 二次开发改造内容

本次基于 al-folio 模板进行了以下定制化修改：

### 1. 基础信息配置
- ✅ 修改站点标题、作者姓名（Xinkai Ma / 马鑫凯）
- ✅ 配置个人头像（`assets/img/prof_pic.jpg`）
- ✅ 更新个人简介、教育背景（吉林大学）
- ✅ 配置社交链接（GitHub、邮箱等）

### 2. 中英文双语支持
- ✅ 新增单源文件维护方案（`_pages/about.src.md`）
- ✅ 编写 `split_lang.py` 脚本自动生成中英文页面
- ✅ 配置 GitHub Actions 自动构建双语页面
- ✅ 新增语言切换浮动按钮（`assets/js/language-switcher.js`）

### 3. 项目经历页面优化
- ✅ 删除 `fun` 业余项目分类，仅保留 `work` 学术/竞赛项目
- ✅ 修复项目不展示问题（al-folio 使用 `category` 字段过滤）
- ✅ 修改项目页面标题与简介文案

### 4. 导航栏优化
- ✅ 精简导航栏入口，移除无用菜单项
- ✅ 调整菜单顺序（About → Projects → CV）

### 5. CV 在线简历模块
- ✅ 初始化 CV 页面（`_pages/cv.md`）
- ✅ 配置 CV 数据结构（`_data/cv.yml`）
- ✅ 清空模板示例数据，预留个人简历填写规范

### 6. GitHub 仓库配置 
- ✅ 完善仓库简介（Description）
- ✅ 规范仓库 Topic 标签
- ✅ 保留原 MIT 开源协议

### 7. GitHub Actions 工作流优化
- ✅ 删除 12 个无用工作流文件（unit-tests、prettier、codeql 等）
- ✅ 保留 3 个核心工作流（deploy、update-tocs、broken-links-site）
- ✅ 新增 `split_lang.py` 自动执行步骤

### 8. Pre-commit Hook 自动化
- ✅ 新增 `.githooks/pre-commit` 脚本
- ✅ 自动检测 `about.src.md` 变更并运行 `split_lang.py`
- ✅ 自动将生成的 `about.md` 和 `about-zh.md` 加入 commit
- ✅ 配置 `git config core.hooksPath .githooks`

---

## 👤 个人简介

我目前就读于吉林大学生物与农业工程学院，本科阶段曾在生命科学学院完成前期学业，具备生物学与工程交叉学科背景。

专注于机器人系统、人工智能算法、自主导航与嵌入式控制方向，正在参与全国大学生机器人人工智能竞赛（CRAIC）。

### 在研竞赛项目

1. **CRAIC 月球探索机器人项目**
   - 负责月球车自主导航、SLAM 环境建图、路径规划算法开发
   - 基于 ROS 框架实现机器人野外自主探索功能

2. **CRAIC Simuro 仿真机器人足球项目**
   - 研究多智能体协同策略、博弈决策算法、运动规划控制
   - 搭建仿真环境下的 AI 竞技决策系统

### 研究兴趣

- 🤖 机器人与自主智能系统
- 🧠 机器学习、计算机视觉
- ⚡ 嵌入式系统与运动控制
- 🚀 航天探测机器人技术

---

## 🚀 部署说明

### 在线访问

本主页已通过 GitHub Pages 自动部署，访问地址：

👉 **https://xinkaima1.github.io**

### 本地运行

```bash
# 克隆仓库
git clone https://github.com/xinkaima1/xinkaima1.github.io.git
cd xinkaima1.github.io

# 安装依赖
bundle install

# 本地启动
bundle exec jekyll serve

# 访问 http://localhost:4000
```

### 自动部署流程

#### 本地提交自动化（Pre-commit Hook）

配置 pre-commit hook 后，每次修改 `about.src.md` 并 `git commit` 时：
1. Hook 自动检测 `about.src.md` 变更
2. 自动运行 `split_lang.py` 生成 `about.md` 和 `about-zh.md`
3. 自动将生成文件加入 commit
4. 提交完成

#### 线上部署（GitHub Actions）

1. `git push` 到 `main` 分支
2. GitHub Actions 自动运行 `deploy.yml` 工作流
3. 工作流执行 `split_lang.py` 生成中英文页面
4. Jekyll 构建静态站点
5. 部署到 `gh-pages` 分支，约 **3~5 分钟**后生效

#### 初始化 Hook（首次 clone 后需要运行）

```bash
cd xinkaima1.github.io
git config core.hooksPath .githooks
```

---

## 📁 仓库结构

```
xinkaima1.github.io/
├── _config.yml              # 全站配置文件
├── _pages/                 # 页面文件目录
│   ├── about.src.md        # 首页源文件（中英文合一）
│   ├── projects.md         # 项目列表页
│   └── cv.md              # 在线简历页
├── _projects/              # 项目经历文件目录
│   ├── 1_craic_lunar.md  # 月球探测项目
│   └── 2_craic_simuro.md # Simuro 足球项目
├── _data/
│   ├── cv.yml             # CV 数据结构
│   └── socials.yml        # 社交链接配置
├── assets/
│   ├── img/               # 图片存放目录
│   └── js/                # JavaScript 文件
├── split_lang.py           # 中英文页面自动生成脚本
└── .github/workflows/
    └── deploy.yml          # 自动部署工作流
```

---

## 📖 维护教程

详细的仓库维护教程请参考：**`维护主页教程.md`**

教程涵盖：
- 修改首页 About 内容（**只需编辑 `about.src.md`**，其余自动生成）
- 添加/修改项目经历
- CV 在线简历维护
- 导航栏菜单配置
- 本地修改与部署流程
- 常见问题排查

### ⚠️ 重要：关于 `about.src.md` 和 `about.md`

- **`about.src.md`**：唯一的源文件，所有 About 页面内容都在这里维护
- **`about.md`** 和 **`about-zh.md`**：由 `split_lang.py` 自动生成，**不要手动修改**
- 修改源文件后，运行 `python -X utf8 split_lang.py` 重新生成（或依赖 pre-commit hook 自动执行）

---

## 📞 联系方式

- 📧 邮箱：[1914203268@qq.com](mailto:1914203268@qq.com)
- 💻 GitHub：[xinkaima1](https://github.com/xinkaima1)
- 🌐 学术主页：[https://xinkaima1.github.io](https://xinkaima1.github.io)

---

## 🙏 致谢

本学术主页基于 [al-folio](https://github.com/alshedivat/al-folio) 开源模板搭建，感谢原作者的优秀工作。

al-folio 是一个基于 Jekyll 的学术个人主页模板，支持 GitHub Pages 免费托管，适用于学者、学生和研究人员的学术主页展示。

---

> **License**: MIT License  
> **Template**: [al-folio](https://github.com/alshedivat/al-folio) by Maruan Al-Shedivat
