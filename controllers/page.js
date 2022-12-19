exports.renderProfile = (req, res, next) => {
    // 서비스를 호출 

    res.render('profile', {title: '내 정보 - NodeBird'});
    // res.render(....);
    // res.locals.... 한 데이터도 프론트로 넘어가지만
    // res.render('views', {두 번째 파라미터}) 도 프론트로 넘어간다.
};
exports.renderJoin = (req, res, next) => {
    res.render('join', {title: '회원 가입 - NodeBird'});
};
exports.renderMain = (req, res, next) => {
    res.render('main', {
        title: 'NodeBird',
        twits: [],
    });
};

// 라우터 -> 컨트롤러 -> 서비스
// 계층 레이어 (11장에서 설명)