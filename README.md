# mirae_asset

# 반응형 pc, mobile
# 적응형 pc, mobile

? ::before, ::after의 내용은 스키린리더에서 어떻게 읽힐까

? 반응형으로 하면서 느낀점
> 아직 반응형 작업 스킬이 부족하여 소스 코드가 상당히 복잡해짐, 이렇게 코드를 짤거면 적응형으로 작업하는게 더 효율적일 것같단 생각이 많이듬
> 모바일용 마크업을 추가로 작성할게 좋을지 같은 코드로 미디어 쿼리로 일일이 다 바꿔주는것이 좋은지 고민을 많이 해봐야 할듯
ex)

<div class="pc-content">
  contents...........
</div>

<div class="m-content">
  contents...........
</div>

코드를 pc버전 m버전 따로 써서 해상도에 반응하여 display:none, block할지..



적응형 :
- 기기마다 다른 템플릿이 필요함
- 기기에 맞는 템플릿만 가져와 데이터 사용량이 적고 로딩 속도가 빠름
- 서버 또는 브라우저에서 기기를 감지, Javascript로 조작(DOM Manipulation)

반응형 :
- 하나의 템플릿만 사용
- 모든 css 리소스를 가져와야 해서 데이터 사용량이 많고 로딩 속도가 느려짐
- CSS Mediaquary로 조작


이미지는 줄이지 말것 (원본 그대로 가저와서 css를 통해 줄일것)
버튼 버튼
font-size 작다고 판단 될시 작성전에 디자이너,기획팀이랑 상의할것

디바이스 체크 js  