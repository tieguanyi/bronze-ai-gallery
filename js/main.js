// 导航栏汉堡菜单 + 高亮已经在HTML中通过class="active"手动处理，但我们也处理移动端切换
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 模态框功能（共用）
    const modal = document.getElementById('videoModal');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.querySelector('.close');

    // 关闭模态框
    function closeModal() {
        modal.style.display = 'none';
        modalBody.innerHTML = '';
    }
    if (closeBtn) closeBtn.onclick = closeModal;
    window.onclick = function(e) {
        if (e.target === modal) closeModal();
    };

    // 全局函数：打开模态框并显示自定义消息（用于占位阶段）
    window.openModalWithMsg = function(msg) {
        modalBody.innerHTML = `<div style="padding:2rem;"><p>📢 提示</p><p>${msg}</p><p style="font-size:0.9rem;">✨ 等你提供真实AI视频后，此处将嵌入视频播放器。</p></div>`;
        modal.style.display = 'flex';
    };

    // 专门为 videos.html 里的视频卡片绑定事件
    const videoCards = document.querySelectorAll('.video-card');
    if (videoCards.length > 0) {
        videoCards.forEach(card => {
            card.addEventListener('click', (e) => {
                const name = card.getAttribute('data-name') || '青铜器';
                const msg = card.getAttribute('data-msg') || 'AI动画正在生成中，敬请期待。';
                openModalWithMsg(`「${name}」${msg}`);
            });
        });
    }

    // 为首页的占位视频区域添加点击
    const heroPlaceholder = document.querySelector('.video-placeholder');
    if (heroPlaceholder) {
        heroPlaceholder.addEventListener('click', () => {
            openModalWithMsg('精选预告视频：本作品集首个AI动画，展示后母戊鼎纹样缓慢流动和青铜光泽呼吸效果。真实视频待替换');
        });
    }
});